import backArrow from "../../../assets/image/section5/arrow_2.png";

const BackArrow = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <img
          src={backArrow}
          alt=""
          className="w-20 h-4 mr-5 rotate-90 md:w-16 md:h-3 md:-mb-9 md:rotate-0 md:mr-0 lg:w-28 lg:h-5 "
        />
      </div>
    </>
  );
};

export default BackArrow;
