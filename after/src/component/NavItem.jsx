const NavItem = ({ nav }) => {
  return (
    <li className="inline-block mr-[20px]">
      <a
        href={nav.href}
        className="text-[#444] font-semibold no-underline hover:text-[#BDBDBD]"
      >
        {nav.title}
      </a>
    </li>
  );
};

export default NavItem;