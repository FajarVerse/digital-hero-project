import shape from "../../../assets/image/section2/shape.png";

const Shape = () => {
  return (
    <>
      <div className="w-1/2 absolute top-0 left-0 bottom-0 overflow-hidden">
        <img
          src={shape}
          alt=""
          className="rotate-180 scale-[350%] absolute bottom-20 -left-10 -translate-x-20 opacity-40 md:scale-[150%] lg:h-screen lg:w-full lg:opacity-30 xl:bottom-28"
        />
      </div>
      <div className="w-1/2 absolute top-0 right-0 bottom-0 overflow-hidden">
        <img
          src={shape}
          alt=""
          className="scale-[350%] absolute bottom-20 -right-10 translate-x-20 opacity-35 md:scale-[150%] lg:h-screen lg:w-full lg:opacity-20"
        />
      </div>
    </>
  );
};

export default Shape;
