const Payment = (props) => {
  const { image, className } = props;

  return (
    <>
      <div
        className={`w-18 h-18 flex items-center mb-2 lg:w-20 lg:h-20 lg:mb-5 xl:mb-7 ${className} hover:scale-105 duration-300 ease-in-out`}
      >
        <img src={image} alt={image} />
      </div>
    </>
  );
};

export default Payment;
