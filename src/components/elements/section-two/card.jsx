import icon from "../../../assets/image/section2/diro_icon.png";

const Card = (props) => {
  const { title, desc, className } = props;

  return (
    <>
      <div
        className={`w-36 h-24 px-4 py-3 flex flex-col items-center rounded-md bg-white absolute ${className} lg:w-40 lg:h-28 xl:w-[13rem] xl:h-[9.4rem] xl:py-5 z-30`}
      >
        <img
          src={icon}
          alt=""
          className="w-7 h-7 absolute -top-2.5 -left-2.5 xl:w-11 xl:h-11 xl:-left-4 xl:-top-4"
        />
        <div className="h-[20%]">
          <h1 className="font-poppins font-semibold text-[0.6rem] text-indigo-blue text-center lg:text-[0.7rem] xl:font-bold xl:text-base">
            {title}
          </h1>
        </div>
        <div className="h-[80%] mt-4 lg:mt-5 xl:mt-8">
          <p className="font-inter font-light text-[0.45rem] text-black text-center mt-1 lg:text-[0.5rem] xl:text-xs">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
