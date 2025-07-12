import Section from './Section';
import ProjectItem from './ProjectItem';

const projects = [
    {
        id: 1,
        title: '약품 관리 및 약국 찾기 모바일 앱',
        description: '사용자가 보유 중인 약품을 등록하고 유통기한을 관리하며, 사용자 위치 기반으로 가까운 약국 정보를 확인할 수 있도록 도와줍니다.'
    },
    {
        id: 2,
        title: '이미지 쇼핑몰 웹사이',
        description: '사용자가 쇼핑몰 웹사이트에서 원하는 이미지의 상세 정보를 확인하고 구입할 수 있으며, 사용자는 구입한 이미지를 이메일로 받아볼 수 있습니다.'
    },
];

const Projects = () => {
    const projectList = projects.map((project) => <ProjectItem project={project} key={project.id} />);
    return (
        <Section id="projects" title="프로젝트">
            {projectList}
        </Section>
    );
};

export default Projects;
