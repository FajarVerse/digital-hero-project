const Paragraph = (props) => {
  const { children } = props;

  return (
    <>
      <p className="font-poppins font-medium text-[0.8rem] text-center text-black md:text-sm xl:font-semibold 2xl:text-base ">
        {children}
      </p>
    </>
  );
};

export default Paragraph;
