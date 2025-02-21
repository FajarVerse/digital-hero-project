const NavList = (props) => {
  const { children, link } = props;

  return (
    <>
      <li>
        <a
          href={`#${link}`}
          className="navbar-list xl:text-[1.05rem] bg-linear-to-r from-digital-aqua to-deep-blue bg-clip-text hover:text-transparent transition ease-in-out duration-300"
        >
          {children}
        </a>
      </li>
    </>
  );
};

export default NavList;
