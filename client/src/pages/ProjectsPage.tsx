import React, {useEffect} from 'react';
import styled from "@emotion/styled";
import Container from "../ui/Container/Container";
import Heading from "../ui/Typography/Heading";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react-lite";
import ProjectsStore from "../store/Projects";
import FetchedArticles from "../store/Articles";
import NoData from "../ui/NoData/NoData";
import Loader from "../ui/Loader/Loader";
import Button from "../ui/Button/Button";
import {githubRepositoriesLink} from "../utils/constants"
import {toJS} from "mobx";

const Projects = styled.div`
  padding: 140px 0 40px 0;
  text-align: center;
  #allProjects {
    margin-top: 50px;
  }
`



const ProjectsPage = observer(() => {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        ProjectsStore.fetchProjects(i18n.language)
    }, [i18n.language])

    if(FetchedArticles.isLoading) return <Loader/>
    if (FetchedArticles.error) return <NoData/>

    console.log(toJS(ProjectsStore));

    return (
        <Projects data-testid="projects">
            <Container>
                <Heading>{t("my_projects")}</Heading>
                {ProjectsStore.projects.map(project => <ProjectSection key={project.id} {...project}/>)}
                <Button id="allProjects"><a  href={githubRepositoriesLink}>{t("all_repositories")}</a></Button>
            </Container>
        </Projects>
    );
});

export default ProjectsPage;