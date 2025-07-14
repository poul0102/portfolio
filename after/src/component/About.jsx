import Section from './Section';

const About = () => {
  return (
    <Section id="about" showTitle={false}>
      <div className="min-h-screen flex flex-col justify-center px-[5%] gap-10 py-10 -mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              강상택
            </h1>
            <p className="text-2xl md:text-3xl text-white font-medium leading-snug">
              가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src="https://placehold.co/300x300"
              alt="프로필 이미지"
              className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover rounded-full"
            />
          </div>
        </div>

        <div className="w-full border-t border-white"></div>

        <div className="flex flex-col md:flex-row gap-10 text-white">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Certificate</h3>
            <ul className="list-disc list-inside space-y-1 text-lg md:text-xl">
              <li>컴퓨터활용능력 2급 (2019.09)</li>
              <li>정보처리기사 (2024.06)</li>
              <li>TOEIC Speaking (2025.03)</li>
              <li>SQL 개발자(SQLD) (2025.04)</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Education</h3>
            <ul className="list-disc list-inside space-y-1 text-lg md:text-xl">
              <li>우리FISA 5기 (클라우드 서비스 개발)</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
