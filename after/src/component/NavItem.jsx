const NavItem = ({ nav }) => {
  return (
    <li>
      <a
        href={nav.href}
        target={nav.external ? '_blank' : '_self'}
        rel={nav.external ? 'noopener noreferrer' : undefined}
        className="flex items-center justify-center text-white font-semibold px-4 py-2 rounded-full no-underline hover:bg-green-300 hover:text-black transition-colors "
        aria-label={nav.title || 'GitHub'}
      >
        {nav.icon ? nav.icon : nav.title}
      </a>
    </li>
  );
};

export default NavItem;
