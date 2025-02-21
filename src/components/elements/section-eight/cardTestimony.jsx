const CardTestimony = (props) => {
  const { children, className } = props;

  return (
    <>
      <div className={`rectangle lg:before:w-[24.5rem] lg:before:h-[15rem] ${className}`}>
        <div className="relative z-30 w-ful lg:w-70">
          {children}
          <div className="w-16 h-16 flex items-center justify-center rounded-full rotate-180 border-4 border-white bg-linear-to-b absolute top-3 -left-16 from-digital-aqua to-deep-blue">
            <span className="text-3xl text-white mt-2 lg:text-5xl lg:mt-3">❞</span>
          </div>
        </div>
      </div>
    </>
  );
};

const CardHeader = (props) => {
  const { name, business, description } = props;

  return (
    <>
      <div className="w-full mb-3 lg:mb-5">
        <h2 className="font-poppins font-bold text-lg text-center text-indigo-blue -ml-4 lg:ml-0 lg:text-2xl">
          {name}
        </h2>
        <div className="w-full flex justify-center items-center gap-1 -ml-2 lg:ml-0">
          <div className="w-14 h-0.5 bg-indigo-blue relative before:content-[''] before:absolute before:right-0 before:top-0 before:-translate-y-[0.07rem] before:w-1 before:h-1 before:bg-indigo-blue before:rotate-45"></div>
          <p className="font-poppins font-bold text-[0.55rem] lg:text-[0.6rem]">{business}</p>
          <div className="w-14 h-0.5 bg-indigo-blue relative before:content-[''] before:absolute before:left-0 before:top-0 before:-translate-y-[0.07rem] before:w-1 before:h-1 before:bg-indigo-blue before:rotate-45"></div>
        </div>
        <p className="font-poppins font-medium text-[0.55rem] text-center text-indigo-blue -ml-4 mt-0.5 lg:ml-0 lg:text-nowrap lg:text-xs">
          {description}
        </p>
      </div>
    </>
  );
};

const CardBody = ({ children }) => {
  return (
    <>
      <div className="w-full px-2 lg:px-0">
        <p className="font-poppins font-light italic text-[0.75rem] text-center -ml-4 lg:ml-0 lg:text-base">
          {children}
        </p>
      </div>
    </>
  );
};

CardTestimony.CardHeader = CardHeader;
CardTestimony.CardBody = CardBody;

export default CardTestimony;
