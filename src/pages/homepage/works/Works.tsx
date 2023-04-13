import React, { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import { Eye } from "react-feather";
import projectData from "./helpers/projectData";
import ProjectsList from "./ProjectsList";

function Works() {
  const expanded = {
    id: projectData[0].id,
    preview: projectData[0].preview,
    image: projectData[0].image,
    name: projectData[0].name,
    avaliable: projectData[0].avaliable,
    description: projectData[0].description,
    year: projectData[0].year,
    type: projectData[0].type,
    scope: projectData[0].scope,
  };


  interface ProjectStructure{
    avaliable: string,
    description: string,
    id:number,
    image: {
      path: string,
      id: number,
    }[],
    name: string,
    scope: string,
    type: string,
    year: number,   
  }

  const [expandedProject, setExpandendProject] = useState<ProjectStructure>(expanded)

  function handleSetExpandendProject(project: ProjectStructure){
    setExpandendProject({
      id: project.id,
      image: project.image,
      name: project.name,
      avaliable: project.avaliable,
      description: project.description,
      year: project.year,
      type: project.type,
      scope: project.scope,
    })   

  }


  const handleChangeProjectList = () =>{
    const newData = projectData.filter((item) => item.id !== expandedProject.id)
    return newData
  }


  useEffect(()=>{
    handleChangeProjectList()
  }, [expandedProject])


  const [projectID, setProjectID] = useState(0)


  const activeSlider = (event:React.MouseEvent<HTMLSpanElement>)=>{
    const element = event.target as HTMLElement
    element.className === 'checkbox' && setProjectID(Number(element.id))

    if(element.id === 'next' && projectID >= 0 && projectID <= expandedProject.image.length - 2){
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
          Explore os meus projetos mais recentes, que navegam entre design,
          desenvolvimento e identidade visual
        </p>
      </div>
      <div className="works__slider" data-aos="fade-up">
        <img src={expandedProject.image[projectID].path} alt="teste" />
        <div className="works__slider__controller">
          <span className="controller__way prev" id="prev" onClick={activeSlider}>Anterior</span>
          <div className="controller__checkbox">
            {expandedProject.image.map((item)=>(
               <div className={projectID === item.id ? 'checkbox checked' : 'checkbox'} onClick={activeSlider} id={item.id.toString()} key={item.id}></div>
            ))}
          </div>
          <span className="controller__way next" id="next" onClick={activeSlider}>Próximo</span>
        </div>
      </div>
      <div className="works__description">
        <div className="works__overview">
          <div className="works__overview__status">
            <h4 className="works__overview__project-name" data-aos={"fade-up"}>
              {expandedProject.name}
            </h4>
            <p className="works__overview__avaliable" data-aos={"fade-up"}>
              Disponível no {expandedProject.avaliable}
            </p>
          </div>
          <Button text={"Ver projeto"} icon={Eye} data-aos={"fade-up"}></Button>
        </div>
        <div className="works__additional-info">
          <p
            className="works__additional-info__description"
            data-aos={"fade-up"}
          >
            {expandedProject.description}
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
              {expandedProject.year}
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
                {expandedProject.type}
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
                {expandedProject.scope}
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
