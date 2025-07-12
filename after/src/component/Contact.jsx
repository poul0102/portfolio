import Section from './Section';

const Contact = () => {
  return (
    <Section id="contact" title="연락처">
      <div className="space-y-2 text-[1.1rem] text-[#444]">
        <p>Email: lday217617@gmail.com</p>
        <p>Phone Number: 010-2745-0689</p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/poul0102"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://github.com/poul0102
          </a>
        </p>
      </div>
    </Section>
  );
};

export default Contact;
