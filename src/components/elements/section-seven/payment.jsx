const Payment = (props) => {
  const { image, className } = props;

  return (
    <>
      <div
        className={`w-18 h-18 flex items-center mb-2 lg:w-20 lg:h-20 lg:mb-5 xl:mb-7 ${className}`}
      >
        <img src={image} alt={image} />
      </div>
    </>
  );
};

export default Payment;
