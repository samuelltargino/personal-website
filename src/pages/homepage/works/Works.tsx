import React, { useEffect, useState } from "react";
import ProjectsList from "./ProjectsList";
import ProjectDescription from "./ProjectDescription";
import ProjectSlider from "./ProjectSlider";
import projectData from "./helpers/projectData";

interface ProjectStructure {
  avaliable: string;
  description: string;
  id: number;
  preview?: string;
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

function Works() {
  const [expandedProject, setexpandedProject] = useState<ProjectStructure>({
    id: projectData[0].id,
    preview: projectData[0].preview,
    image: projectData[0].image,
    name: projectData[0].name,
    avaliable: projectData[0].avaliable,
    description: projectData[0].description,
    year: projectData[0].year,
    type: projectData[0].type,
    scope: projectData[0].scope,
  });

  const handleSetexpandedProject = (project: ProjectStructure) =>
    setexpandedProject({ ...project });

  const handleChangeProjectList = () => {
    const newData = projectData.filter(
      (item) => item.id !== expandedProject.id
    );
    return newData;
  };

  return (
    <section className="works" id="projects">
      <div className="works__text">
        <h3 className="works__text__tag" data-aos="fade-up">
          Últimos trabalhos
        </h3>
        <p className="works__text__subtitle" data-aos="fade-up">
          Explore os meus projetos mais recentes, que navegam entre design,
          desenvolvimento e identidade visual
        </p>
      </div>

      <ProjectSlider
        expandedProject={expandedProject}
        handleSetexpandedProject={handleSetexpandedProject}
      />

      <ProjectDescription expandedProject={expandedProject} />

      <ProjectsList
        newData={handleChangeProjectList}
        handleSetexpandedProject={handleSetexpandedProject}
      ></ProjectsList>
      <div className="works__divider line last-line" data-aos={"fill-in"}></div>
    </section>
  );
}

export default Works;
