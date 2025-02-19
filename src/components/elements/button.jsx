const Button = (props) => {
  const { className, children } = props;

  return (
    <>
      <a
        href=""
        className={`w-[8rem] py-2 font-poppins font-medium text-xs rounded-sm md:w-[9rem] md:text-sm flex items-center justify-center md:py-3 xl:w-[12rem] xl:text-base ${className}`}
      >
        {children}
      </a>
    </>
  );
};

export default Button;
