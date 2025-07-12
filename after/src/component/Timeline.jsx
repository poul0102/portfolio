import { useEffect } from 'react';
import TimelineItem from './TimelineItem';
import Section from './Section';

const timelineData = [
  {
    id: 1,
    date: '2019.09',
    title: '컴퓨터활용능력 2급',
    align: 'left',
    type: 'certification',
  },
  {
    id: 2,
    date: '2024.06',
    title: '약품 관리 및 약국 찾기 모바일 앱',
    period: '2023.09 ~ 2024.06',
    align: 'right',
    type: 'project',
  },
  {
    id: 3,
    date: '2024.06',
    title: '정보처리기사',
    align: 'left',
    type: 'certification',
  },
  {
    id: 4,
    date: '2024.12',
    title: '이미지 쇼핑몰 웹사이트',
    period: '2024.11 ~ 2024.12',
    align: 'right',
    type: 'project',
  },
  {
    id: 5,
    date: '2025.02',
    title: '대학 졸업',
    align: 'left',
    type: 'text',
  },
  {
    id: 6,
    date: '2025.03',
    title: 'Toeic Speaking',
    align: 'right',
    type: 'certification',
  },
  {
    id: 7,
    date: '2025.04',
    title: 'SQL 개발자(SQLD)',
    align: 'left',
    type: 'certification',
  },
  {
    id: 8,
    date: '2025.07',
    title: '우리FISA 5기',
    align: 'right',
    type: 'text',
  },
];

const Timeline = () => {
  useEffect(() => {
    const scrollToSection = (className, sectionId) => {
      const buttons = document.querySelectorAll(className);
      const section = document.getElementById(sectionId);
      
      buttons.forEach((btn) =>
        btn.addEventListener('click', () => section.scrollIntoView())
      );
    };

    scrollToSection('.cerButton', 'certifications');
    scrollToSection('.proButton', 'projects');
  }, []);

  return (
    <Section id="timeline" title="타임라인">
      <div className="relative max-w-[1140px] mx-auto py-[15px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-ml-[2px] before:w-[2px] before:bg-[#BDBDBD]">
        {timelineData.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Timeline;
