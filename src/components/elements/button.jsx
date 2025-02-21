const Button = (props) => {
  const { className, children } = props;

  return (
    <>
      <a
        href=""
        className={`w-[9rem] py-2 font-poppins font-semibold text-xs rounded-sm md:w-[10rem] md:text-sm flex items-center justify-center md:py-3 lg:w-60 lg:py-3.5 lg:text-base xl:w-72 xl:py-5 xl:text-base ${className} hover:scale-105 transition duration-300 ease-in-out`}
      >
        {children}
      </a>
    </>
  );
};

export default Button;
