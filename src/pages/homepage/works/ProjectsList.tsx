import React from "react";
import Button from "../../../components/button/Button";
import { Plus } from "react-feather";
import { ReactSVG } from "react-svg";

interface ProjectStructure {
  about?: string;
  avaliable: string;
  description: string;
  id: number;
  preview: string;
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

interface PropsData {
  newData: () => ProjectStructure[];
  handleSetexpandedProject: (project: ProjectStructure) => void;
}

const ProjectsList = (props: PropsData) => {
  return (
    <ul className="works__projects">
      {props.newData().map((project: ProjectStructure, index: number) => (
        <li key={index} className="works__other-projects__layout">
          <div className="works__divider line" data-aos={"fill-in"}></div>

          <div className="works__other-projects__content">
            <div className="project-preview" data-aos="fade-up">
              <ReactSVG src={project.preview}></ReactSVG>
            </div>
            <div className="project-description" data-aos="fade-up">
              <p>{project.about}</p>
            </div>
            <Button
              link={"#projects"}
              text={"detalhes"}
              icon={Plus}
              data-aos={"fade-up"}
              event={() => props.handleSetexpandedProject(project)}
            ></Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
