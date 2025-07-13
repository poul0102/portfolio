import Section from './Section';
import { Mail, Phone, Github } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contact" title="CONTACT" minHeight={false}>
      <div className="bg-[#1a1a1a] p-10 rounded-xl text-white space-y-6 max-w-[600px] mx-auto">
        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-green-300" />
          <span className="text-lg">lday217617@gmail.com</span>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 text-green-300" />
          <span className="text-lg">000-0000-0000</span>
        </div>

        <div className="flex items-center gap-4">
          <Github className="w-6 h-6 text-green-300" />
          <a
            href="https://github.com/poul0102"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:underline hover:text-green-300"
          >
            github.com/poul0102
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
