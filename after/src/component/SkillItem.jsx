const SkillItem = ({ skill }) => {
    return (
        <li className="flex items-center mb-[12px]">
            <span className="w-[100px] font-bold text-center">{skill.name}</span>
            <div className="flex-1 h-[20px] bg-[#dedede] rounded-[10px] overflow-hidden">
                <div
                    className="h-full bg-[#b6b6b6] rounded-[10px]"
                    style={{ width: `${skill.percent}%` }}
                ></div>
            </div>
        </li>
    );
};

export default SkillItem;