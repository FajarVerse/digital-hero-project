import arrow from "../../../assets/image/section5/arrow_1.png";

const Arrow = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          src={arrow}
          alt=""
          className="w-20 h-4 ml-5 rotate-90 md:w-16 md:h-3 md:-mt-9 md:rotate-0 md:ml-0 lg:w-28 lg:h-5"
        />
      </div>
    </>
  );
};

export default Arrow;
