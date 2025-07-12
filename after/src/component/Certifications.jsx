import Section from './Section';
import CertificationItem from './CertificationItem';

const certifications = [
    {
        id: 1,
        title: '컴퓨터활용능력 2급',
        publisher: '대한상공회의소',
        date: '2019.09.20'
    },
    {
        id: 2,
        title: '정보처리기사',
        publisher: '한국산업인력공단',
        date: '2024.06.18'
    },
    {
        id: 3,
        title: 'SQL 개발자(SQLD)',
        publisher: '한국데이터산업진흥원',
        date: '2025.04.04'
    },
    {
        id: 4,
        title: 'TOEIC Speaking',
        publisher: '한국TOEIC위원회',
        date: '2025.03.22'
    },



];

const Certifications = () => {
    const certificationList = certifications.map((certification) => <CertificationItem certification={certification} key={certification.id} />);
    return (
        <Section id="certifications" title="자격증">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                {certificationList}
            </div>
        </Section>
    );
};

export default Certifications;
