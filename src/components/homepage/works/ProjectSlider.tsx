import React, { useEffect, useState, useRef, useMemo } from "react";
import { Blurhash } from "react-blurhash";

interface ProjectStructure {
  avaliable: string;
  description: string;
  id: number;
  image: {
    path: string;
    id: number;
    hash: string;
  }[];
  name: string;
  scope: string;
  type: string;
  year: number;
}

type expandedProjectProps = {
  expandedProject: ProjectStructure;
};

const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};

const ProjectSlider = (props: expandedProjectProps) => {
  const [projectID, setProjectID] = useState(0);
  const [imagesAreLoaded, setImagesAreLoaded] = useState(false);
  const [blurHashDimensions, setBlurHashDimensions] = useState<{
    width?: number | undefined;
    height?: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });
  const imageFieldRef = useRef<HTMLDivElement>(null);

  const loadedImages = useMemo(
    () => props.expandedProject.image.map((item) => loadImage(item.path)),
    [props.expandedProject]
  );

  useEffect(() => {
    Promise.all(loadedImages)
      .then(() => {
        setImagesAreLoaded(true);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, [loadedImages]);

  useEffect(
    () => (setImagesAreLoaded(false), setProjectID(0)),
    [props.expandedProject]
  );

  useEffect(() => {
    imageFieldRef &&
      setBlurHashDimensions({
        width: imageFieldRef.current?.offsetWidth,
        height: imageFieldRef.current?.offsetHeight,
      });
  }, [imagesAreLoaded, window.onresize]);

  const activeSlider = (event: React.MouseEvent<HTMLSpanElement>) => {
    const element = event.target as HTMLElement;
    const projectLength = props.expandedProject.image.length;
    element.className === "checkbox" && setProjectID(Number(element.id));

    if (
      element.id === "next" &&
      projectID >= 0 &&
      projectID < projectLength - 1
    ) {
      setProjectID(projectID + 1);
    } else if (
      element.id === "prev" &&
      projectID > 0 &&
      projectID <= projectLength
    ) {
      setProjectID(projectID - 1);
    }
  };

  return (
    <div>
      <div className="works__slider" data-aos="fade-up">
        <div className="image__field" ref={imageFieldRef}>
          {!imagesAreLoaded ? (
            <Blurhash
              hash={props.expandedProject.image[projectID].hash}
              width={blurHashDimensions.width}
              height={blurHashDimensions.height}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            ></Blurhash>
          ) : (
            <img
              className="project-image"
              src={props.expandedProject.image[projectID].path}
              loading="lazy"
              alt={props.expandedProject.name}
            />
          )}
        </div>
        <div className="works__slider__controller">
          <span
            className="controller__way prev"
            id="prev"
            onClick={activeSlider}
          >
            Anterior
          </span>
          <div className="controller__checkbox">
            {props.expandedProject.image.map((item) => (
              <div
                className={
                  projectID === item.id ? "checkbox checked" : "checkbox"
                }
                onClick={activeSlider}
                id={item.id.toString()}
                key={item.id}
              ></div>
            ))}
          </div>
          <span
            className="controller__way next"
            id="next"
            onClick={activeSlider}
          >
            Próximo
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
