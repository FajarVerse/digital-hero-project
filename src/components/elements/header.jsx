const Header = (props) => {
  const { className, children } = props;

  return (
    <>
      <h1
        className={`font-poppins font-bold text-2xl text-center md:text-3xl xl:text-[2.7rem] ${className}`}
      >
        {children}
      </h1>
    </>
  );
};

export default Header;
