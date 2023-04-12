import React, { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import { Eye } from "react-feather";
import projectData from "./helpers/projectData";
import ProjectsList from "./ProjectsList";

function Works() {
  const expanded = {
    id: projectData[0].id,
    image: projectData[0].image,
    name: projectData[0].name,
    available: projectData[0].available,
    description: projectData[0].description,
    year: projectData[0].year,
    type: projectData[0].type,
    scope: projectData[0].scope,
  };

  const [showProject, setExpandendProject] = useState(expanded)


  function handleSetExpandendProject(project, index){
    setExpandendProject({
      id: project.id,
      image: project.image,
      name: project.name,
      available: project.available,
      description: project.description,
      year: project.year,
      type: project.type,
      scope: project.scope,
    })   

    handleChangeProjectList(project, index)
  }


  const handleChangeProjectList = () =>{
    const newData = projectData.filter((item) => item.id !== showProject.id)
    return newData
  }


  useEffect(()=>{
    handleChangeProjectList(showProject)
  }, [showProject])


  const [projectID, setProjectID] = useState(0)


  const activeSlider = (event)=>{
    const element = event.target
    element.className === 'checkbox' && setProjectID(Number(element.id))

    if(element.id === 'next' && projectID >= 0 && projectID <= showProject.image.length - 2){
      setProjectID(projectID + 1)
    } else if( element.id === 'prev' && projectID > 0){
      setProjectID(projectID - 1)
    } else {
      return
    }
  }


  return (
    <section className="works" id="projects">
      <div className="works__text">
        <h3 className="works__text__tag" data-aos="fade-up">
          Últimos trabalhos
        </h3>
        <p className="works__text__subtitle" data-aos="fade-up">
          Explore os nossos projetos mais recentes, que navegam entre design,
          desenvolvimento e identidade visual
        </p>
      </div>
      <div className="works__slider" data-aos="fade-up">
        <img src={showProject.image[projectID].path} alt="teste" />
        <div className="works__slider__controller">
          <span className="controller__way prev" id="prev" onClick={activeSlider}>Anterior</span>
          <div className="controller__checkbox">
            {showProject.image.map((item)=>(
               <div className={projectID === item.id ? 'checkbox checked' : 'checkbox'} onClick={activeSlider} id={item.id} key={item.id}></div>
            ))}
          </div>
          <span className="controller__way next" id="next" onClick={activeSlider}>Próximo</span>
        </div>
      </div>
      <div className="works__description">
        <div className="works__overview">
          <div className="works__overview__status">
            <h4 className="works__overview__project-name" data-aos={"fade-up"}>
              {showProject.name}
            </h4>
            <p className="works__overview__avaliable" data-aos={"fade-up"}>
              Disponível no {showProject.available}
            </p>
          </div>
          <Button text={"Ver projeto"} icon={Eye} data-aos={"fade-up"}></Button>
        </div>
        <div className="works__additional-info">
          <p
            className="works__additional-info__description"
            data-aos={"fade-up"}
          >
            {showProject.description}
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
              {showProject.year}
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
                {showProject.type}
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
                {showProject.scope}
              </label>
            </div>

            <div className="works__divider line" data-aos={"fill-in"}></div>
          </div>
        </div>
      </div>
      <ProjectsList newData={handleChangeProjectList} handleSetExpandendProject={handleSetExpandendProject} data={expanded}></ProjectsList>
      <div className="works__divider line last-line" data-aos={"fill-in"}></div>
    </section>
  );
}

export default Works;
