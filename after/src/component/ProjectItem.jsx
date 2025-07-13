import { FaGithub } from 'react-icons/fa';

const ProjectItem = ({ project }) => {
    return (
        <article className="relative h-[20vh] p-10 mb-10 border-2 border-green-300 rounded-4xl text-white flex flex-col justify-between">
            <div className="absolute top-0 right-15 px-4 py-1 -translate-y-1/2 rounded-4xl border-2 border-green-300 text-lg font-semibold z-5 bg-black">
                {project.date} ({project.headCount})
            </div>
            <h3 className="text-4xl font-extrabold mb-10 text-white">{project.title}</h3>
            <p className="text-xl leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-6">
                {project.techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-green-300 text-sm font-bold text-black px-3 py-1 rounded-full "
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 text-green-300 hover:text-white transition-colors"
                title={project.href}
            >
                <FaGithub size={40} />
            </a>
        </article>
    );
};

export default ProjectItem;
