import Section from './Section';

const About = () => {
  return (
    <Section id="about" showTitle={false}>
      <div className="h-screen flex flex-col justify-center px-[10%] gap-[40px] -mt-20 mb-20">
        <div className="flex flex-row items-center justify-between gap-[40px]">
          <div className="flex-1 text-left">
            <h1 className="text-7xl font-extrabold text-white mb-10">
              강상택
            </h1>
            <p className="text-4xl text-white font-medium leading-snug">
              가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src="https://placehold.co/400x400"
              alt="프로필 이미지"
              className="w-[400px] h-[400px] object-cover rounded-full"
            />
          </div>
        </div>

        <div className="w-full border-t border-white my-4"></div>

        <div className="flex flex-row gap-[40px] text-white">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-2">Certificate</h3>
            <ul className="list-disc list-inside space-y-1 text-xl">
              <li>컴퓨터활용능력 2급 (2019.09)</li>
              <li>정보처리기사 (2024.06)</li>
              <li>TOEIC Speaking (2025.03)</li>
              <li>SQL 개발자(SQLD) (2025.04)</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-2">Education</h3>
            <ul className="list-disc list-inside space-y-1 text-xl">
              <li>우리FISA 5기 (클라우드 서비스 개발)</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
