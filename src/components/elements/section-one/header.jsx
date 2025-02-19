const Header = (props) => {
  const { children } = props;

  return (
    <>
      <h1 className="font-poppins font-bold text-2xl text-center text-indigo-blue md:text-[1.7rem] lg:text-3xl xl:text-4xl 2xl:text-[2.5rem]">
        {children}
      </h1>
    </>
  );
};

export default Header;
