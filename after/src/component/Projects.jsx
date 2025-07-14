import Section from './Section';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: '약품 관리 및 약국 찾기 모바일 앱',
        description: '사용자가 보유 중인 약품을 등록하고 유통기한을 관리하며, 사용자 위치 기반으로 가까운 약국 정보를 확인할 수 있도록 도와줍니다.',
        techStack: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
        date: '2023.09 ~ 2024.06',
        headCount: '4명',
        href: 'https://github.com/poul0102'
    },
    {
        id: 2,
        title: '이미지 쇼핑몰 웹사이트',
        description: '사용자가 쇼핑몰 웹사이트에서 원하는 이미지의 상세 정보를 확인하고 구입할 수 있으며, 사용자는 구입한 이미지를 이메일로 받아볼 수 있습니다.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        date: '2024.11 ~ 2024.12',
        headCount: '4명',
        href: 'https://github.com/poul0102'
    },
    {
        id: 3,
        title: '프로젝트',
        description: '이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서',
        techStack: ['가', '나', '다', '라', '마'],
        date: '0000.00 ~ 0000.00',
        headCount: '0명',
        href: 'https://github.com/poul0102'
    },
    {
        id: 4,
        title: '프로젝트',
        description: '이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서이렇게저렇게해서',
        techStack: ['가', '나', '다'],
        date: '0000.00 ~ 0000.00',
        headCount: '0명',
        href: 'https://github.com/poul0102'
    },
];

const Projects = () => {
    return (
        <Section id="projects" title="PROJECT">
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 60 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <ProjectItem project={project} />
                </motion.div>
            ))}
        </Section>
    );
};

export default Projects;
