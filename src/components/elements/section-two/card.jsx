const Card = (props) => {
  const { title, desc, className } = props;

  return (
    <>
      <div className={`w-32 px-2.5 py-2 rounded-md bg-white ${className}`}>
        <h1 className="font-poppins font-semibold text-[0.6rem] text-indigo-blue text-center">
          {title}
        </h1>
        <p className="font-poppins font-light text-[0.45rem] text-black text-center mt-1">
          {desc}
        </p>
      </div>
    </>
  );
};

export default Card;
