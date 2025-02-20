const SmallCard = (props) => {
  const { children } = props;

  return (
    <>
      <div className="w-30 h-32 px-2 py-1.5 bg-white rounded-t-2xl rounded-br-2xl md:w-28 md:h-28 md:py-2 lg:w-30 lg:h-32 lg:py-2.5 xl:w-42 xl:h-44 xl:py-4">
        {children}
      </div>
    </>
  );
};

const CardIcon = (props) => {
  const { icon } = props;

  return (
    <>
      <div className="h-[30%] mb-2.5 flex items-center md:mb-1.5 lg:mb-2.5 xl:mb-3">
        <img src={icon} alt={icon} className="h-full mx-auto md:h-[90%] lg:h-full" />
      </div>
    </>
  );
};

const CardBody = (props) => {
  const { title, children } = props;

  return (
    <>
      <div className="h-[70%]">
        <h3 className="font-poppins font-bold text-base text-center text-indigo-blue md:text-sm lg:text-base xl:text-lg">
          {title}
        </h3>
        <p className="font-poppins font-medium text-[0.65rem] text-center text-indigo-blue md:text-[0.55rem] lg:text-[0.6rem] xl:text-sm">
          {children}
        </p>
      </div>
    </>
  );
};

SmallCard.CardIcon = CardIcon;
SmallCard.CardBody = CardBody;

export default SmallCard;
