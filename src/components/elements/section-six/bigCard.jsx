import ListBigCard from "./listBigCard";

const BigCard = (props) => {
  const { children, className } = props;

  return (
    <>
      <div
        className={`w-[20rem] h-[40rem] relative px-7 py-7 rounded-xl shadow-lg shadow-slate-400 md:px-4 md:py-7 md:h-[29rem] lg:h-[36.5em] lg:px-5 lg:py-5 xl:w-[24.6rem] xl:h-[47.6rem] xl:px-8 xl:py-8 ${className}`}
      >
        {children}
      </div>
    </>
  );
};

const BigCardHeader = (props) => {
  const { icon, title, bgIcon, textColor, titleColor, opacityBtn } = props;

  return (
    <>
      <div className="w-full flex items-start gap-3 mb-5 md:mb-2 lg:mb-3 xl:mb-4">
        <div
          className={`w-14 h-14 p-3  rounded-xl md:w-10 md:h-10 md:p-2 lg:w-12 lg:h-12 xl:w-18 xl:h-18 xl:p-3.5 ${bgIcon}`}
        >
          <img src={icon} alt="" />
        </div>
        <div>
          <p
            className={`font-dm-sans font-medium text-base md:text-sm lg:text-base xl:text-lg ${textColor}`}
          >
            For individuals
          </p>
          <h3
            className={`font-dm-sans font-bold text-2xle md:text-xl lg:text-2xl ${titleColor}`}
          >
            {title}
          </h3>
        </div>
      </div>

      <button
        className={`absolute top-3 right-3 px-2 py-2 bg-white rounded-lg flex items-center ${opacityBtn}`}
      >
        <span className="bg-linear-to-r from-digital-aqua to-deep-blue bg-clip-text text-transparent font-dm-sans font-bold text-xs">
          Best Seller
        </span>
      </button>
    </>
  );
};

const BigCardBody = (props) => {
  const { children, price, date, textColor, priceColor } = props;

  return (
    <>
      <div className="w-full">
        <p
          className={`font-dm-sans font-light text-base md:text-sm lg:text-base xl:text-lg ${textColor}`}
        >
          {children}
        </p>
      </div>
      <div className="w-full my-5 md:my-2 lg:my-4">
        <h2 className="font-dm-sans font-bold">
          <span
            className={`text-5xl md:text-3xl lg:text-5xl xl:text-[3.3rem] ${priceColor}`}
          >
            {price}
          </span>{" "}
          <span
            className={`font-medium text-sm md:text-xs lg:text-sm xl:text-lg ${textColor}`}
          >
            {date}
          </span>
        </h2>
      </div>
    </>
  );
};

const BigCardFooter = (props) => {
  const { lists, btnTeks, textColor, btnTextColor, btnColor, iconColor, bgIcon} = props;

  return (
    <>
      <div className="w-full">
        <p
          className={`font-dm-sans font-semibold text-base mb-5 md:text-sm md:mb-2 lg:mb-3 xl:font-bold xl:text-lg xl:mb-4 ${textColor}`}
        >
          What’s included
        </p>
        <div className="w-full mt-2 flex flex-col gap-3 md:gap-1.5 lg:gap-2">
          {Array.isArray(lists) &&
            lists.map((list, i) => (
              <ListBigCard key={i} className={bgIcon} listColor={textColor} color={iconColor}>
                {list}
              </ListBigCard>
            ))}
        </div>
      </div>
      <div className="w-full mt-7 flex items-center md:mt-5 lg:mt-7 xl:mt-10">
        <button
          className={`w-full rounded-full py-5  font-dm-sans font-bold text-base md:py-3 md:text-sm lg:py-4 lg:text-base xl:py-6 xl:font-bold xl:text-lg ${btnColor}`}
        >
          <span className={btnTextColor}>{btnTeks}</span>
        </button>
      </div>
    </>
  );
};

BigCard.BigCardHeader = BigCardHeader;
BigCard.BigCardBody = BigCardBody;
BigCard.BigCardFooter = BigCardFooter;

export default BigCard;
