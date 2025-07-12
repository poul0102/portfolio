import Section from './Section';
import SkillItem from './SkillItem';

const skills = [
    { id: 1, name: 'Java', percent: 10 },
    { id: 2, name: '하', percent: 40 },
    { id: 3, name: '나', percent: 20 },
    { id: 4, name: '씩', percent: 56 },
    { id: 5, name: '채', percent: 90 },
    { id: 6, name: '워', percent: 23 },
    { id: 7, name: '나', percent: 67 },
    { id: 8, name: '가', percent: 38 },
    { id: 9, name: '기', percent: 16 },
];

const Skills = () => {
    const skillList = skills.map((skill) => <SkillItem skill={skill} key={skill.id} />);
    return (
        <Section id="skills" title="기술 스택">
            <ul className="list-none w-full p-[30px]">
                {skillList}
            </ul>
        </Section>
    );
};

export default Skills;
