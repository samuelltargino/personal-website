import Button from "../../global/button/Button";
import { Eye } from "react-feather";

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

const ProjectDescription = (props: expandedProjectProps) => {
  return (
    <div>
      <div className="works__description">
        <div className="works__overview">
          <div className="works__overview__status">
            <h4 className="works__overview__project-name" data-aos={"fade-up"}>
              {props.expandedProject.name}
            </h4>
            <p className="works__overview__avaliable" data-aos={"fade-up"}>
              Disponível no {props.expandedProject.avaliable}
            </p>
          </div>
          <Button text={"Ver projeto"} icon={Eye} data-aos={"fade-up"}></Button>
        </div>
        <div className="works__additional-info">
          <p
            className="works__additional-info__description"
            data-aos={"fade-up"}
          >
            {props.expandedProject.description}
          </p>
          <div className="works__additional-info__specifications">
            <div className="works__divider line" data-aos={"fill-in"}></div>

            <div
              className="works__additional-info__year data-sheet"
              data-aos="fade-up"
            >
              <label className="works__additional-info__year__label data-sheet-label">
                Ano
              </label>
              <label className="works__additional-info__year__value data-sheet-value">
                {props.expandedProject.year}
              </label>
            </div>
            <div className="works__divider line" data-aos={"fill-in"}></div>

            <div
              className="works__additional-info__project-type data-sheet"
              data-aos="fade-up"
            >
              <label className="works__additional-info__project-type__label data-sheet-label">
                Tipo do projeto
              </label>
              <label className="works__additional-info__project-type__value data-sheet-value">
                {props.expandedProject.type}
              </label>
            </div>

            <div className="works__divider line" data-aos={"fill-in"}></div>

            <div
              className="works__additional-info__scope data-sheet"
              data-aos="fade-up"
            >
              <label className="works__additional-info__scope__label data-sheet-label">
                Escopo do projeto
              </label>
              <label className="works__additional-info__scope data-sheet-value">
                {props.expandedProject.scope}
              </label>
            </div>

            <div className="works__divider line" data-aos={"fill-in"}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
