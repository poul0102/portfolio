const ProjectItem = ({ project }) => {
    return (
        <article className="bg-white p-[15px_20px] mb-[15px] border-l-[4px] border-[#BDBDBD] rounded-[8px] shadow-[0_2px_6px_rgba(0,0,0,0.05)] text-[#444]">
            <h3 className="text-[#919191] mb-[8px] font-bold">{project.title}</h3>
            <p>{project.description}</p>
        </article>
    );
};

export default ProjectItem;