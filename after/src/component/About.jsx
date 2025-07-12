import Section from './Section';

const About = () => {
  return (
    <Section id="about" title="소개">
      <div className="flex items-center gap-[20px] flex-wrap px-[10%]">
        <img
          src="https://placehold.co/600x400"
          alt="프로필 이미지"
          className="w-[300px] h-[200px] max-w-full rounded-[8px] object-cover shadow-[0_2px_6px_rgba(0,0,0,0.05)]"
        />
        <p className="flex-1 text-[1.1rem] text-[#444]">
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        </p>
      </div>
    </Section>
  );
};

export default About;
