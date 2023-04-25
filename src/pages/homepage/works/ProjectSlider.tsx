import React, { useEffect, useState } from "react";
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

type ExpandedProjectProps = {
  expandedProject: ProjectStructure;
  handleSetExpandedProject: (project: ProjectStructure) => void;
};

const ProjectSlider = (props: ExpandedProjectProps) => {
  const [imagesAreLoaded, setImagesAreLoaded] = useState(false);

  const imageSizes = () => {
    const imageDimensions = document.querySelector("img");
    return {
      imageHeight: imageDimensions?.height,
      imageWidth: imageDimensions?.width,
    };
  };

  const imagesPreLoad = () => {
    let loadedImages = 0;

    props.expandedProject.image.forEach((item) => {
      const imagesToLoad = props.expandedProject.image.length;
      const imagePreLoader = new Image();

      imagePreLoader.src = item.path;

      imagePreLoader.onload = () => {
        loadedImages++;
        loadedImages === imagesToLoad && setImagesAreLoaded(true);
      };
    });
  };

  useEffect(() => {
    imageSizes();
  }, [props.expandedProject]);

  useEffect(() => {
    console.log(1);
    imagesPreLoad();
  }, [props.handleSetExpandedProject]);

  const [projectID, setProjectID] = useState(0);

  const activeSlider = (event: React.MouseEvent<HTMLSpanElement>) => {
    const element = event.target as HTMLElement;
    const projectLength = props.expandedProject.image.length;
    element.className === "checkbox" && setProjectID(Number(element.id));

    if (
      element.id === "next" &&
      projectID >= 0 &&
      projectID <= projectLength - 2
    ) {
      setProjectID(projectID + 1);
    } else if (element.id === "prev" && projectID > 0) {
      setProjectID(projectID - 1);
    }
  };

  return (
    <div>
      <div className="works__slider" data-aos="fade-up">
        {!imagesAreLoaded ? (
          <Blurhash
            hash={props.expandedProject.image[projectID].hash}
            width={imageSizes().imageWidth}
            height={imageSizes().imageHeight}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          ></Blurhash>
        ) : (
          <img
            src={props.expandedProject.image[projectID].path}
            loading="lazy"
            alt={props.expandedProject.name}
          />
        )}
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
