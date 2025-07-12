import NavItem from './NavItem';

const navs = [
  { id: 1, href: '#about', title: '소개' },
  { id: 2, href: '#skills', title: '기술' },
  { id: 3, href: '#projects', title: '프로젝트' },
  { id: 4, href: '#certifications', title: '자격증' },
  { id: 5, href: '#timeline', title: '타임라인' },
  { id: 6, href: '#contact', title: '연락처' },
];

const HeaderNav = () => {
  const navList = navs.map((nav) => <NavItem nav={nav} key={nav.id} />);
  return (
    <nav className="text-right">
      <ul className="list-none mt-[10px]">
        {navList}
      </ul>
    </nav>
  );
};

export default HeaderNav;