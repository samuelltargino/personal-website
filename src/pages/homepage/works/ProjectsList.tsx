import React from 'react';
import Button from '../../../components/button/Button';
import { Plus } from "react-feather";
import { ReactSVG } from "react-svg";

const ProjectsList = (props) => {

  return (
    <ul className="works__projects">
        {props.newData().map((project, index) => (
          <li key={index} className="works__other-projects__layout">
            <div className="works__divider line" data-aos={"fill-in"}></div>

            <div className="works__other-projects__content">
              <div className="project-preview" data-aos="fade-up">
                <ReactSVG src={project.preview}></ReactSVG>
              </div>
              <div className="project-description" data-aos="fade-up">
                <p>
                  {project.about}
                </p>
              </div>
              <Button link={'#projects'} text={"detalhes"} icon={Plus} data-aos={"fade-up"} event={() => props.handleSetExpandendProject(project, index)}></Button>
            </div>
          </li> 
          ))}
      </ul>
  )
}

export default ProjectsList