import NavItem from './NavItem';
import { FaGithub } from 'react-icons/fa';

const navs = [
  { id: 1, href: '#about', title: 'ABOUT' },
  // { id: 2, href: '#skills', title: 'SKILL' },
  { id: 3, href: '#projects', title: 'PROJECT' },
  // { id: 4, href: '#certifications', title: 'CERTIFICATE' },
  // { id: 5, href: '#timeline', title: 'TIMELINE' },
  { id: 6, href: '#contact', title: 'CONTACT' },
  {
    id: 7,
    href: 'https://github.com/poul0102',
    icon: <FaGithub size={30} />,
    external: true,
  },
];

const HeaderNav = () => {
  const navList = navs.map((nav) => <NavItem nav={nav} key={nav.id} />);
  return (
    <nav className="text-center">
      <ul className="list-none mt-[10px] flex justify-center space-x-32">
        {navList}
      </ul>
    </nav>
  );
};

export default HeaderNav;
