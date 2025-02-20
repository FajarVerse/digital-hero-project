const CardContainer = (props) => {
  const { children } = props;

  return (
    <>
      <div className="w-full flex justify-center md:w-auto">{children}</div>
    </>
  );
};

export default CardContainer;
