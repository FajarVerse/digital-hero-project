import List from "../list";

const Card = (props) => {
  const { children } = props;

  return (
    <>
      <div className="w-80 h-[27rem] rounded-2xl p-[0.150rem] bg-linear-to-br from-digital-aqua to-deep-blue md:w-[19rem] md:h-[25.7rem] md: mb-5 lg:w-[17rem] lg:h-[23rem] lg:mb-6">
        <div className="w-full h-full bg-white rounded-[0.9rem] px-4 py-8">
          {children}
        </div>
      </div>
    </>
  );
};

const CardHeader = (props) => {
  const { icon, children } = props;

  return (
    <>
      <div className="w-full h-[20%] mb-5 lg:mb-4">
        <div className="w-20 background-icon p-2.5 mx-auto rounded-[20px] md:w-[4.5rem] lg:w-14">
          <img src={icon} alt="" className="w-full" />
        </div>
      </div>
      <div className="w-full h-[15%] mb-5">
        <h1 className="font-poppins font-semibold text-xl text-indigo-blue text-center mb-3 lg:text-lg">
          {children}
        </h1>
      </div>
    </>
  );
};

const CardBody = (props) => {
  const { list1, list2, list3 } = props;

  return (
    <>
      <div className="w-full h-[35%] ">
        <ul>
          <List
            className="bg-linear-to-r from-digital-aqua to-deep-blue "
            color="white"
          >
            {list1}
          </List>
          <List
            className="bg-linear-to-r from-digital-aqua to-deep-blue "
            color="white"
          >
            {list2}
          </List>
          <List
            className="bg-linear-to-r from-digital-aqua to-deep-blue "
            color="white"
          >
            {list3}
          </List>
        </ul>
      </div>
      <div className="w-full h-[30%] flex justify-center">
        <a
          href=""
          className="font-poppins font-semibold text-base text-deep-blue flex gap-2 items-center"
        >
          Learn More{" "}
          <span className=" relative">
            <div className="w-4 bg-deep-blue rounded-full py-[0.08rem]"></div>
            <div className=" absolute w-2.5 h-2.5 bg-transparent border-t-2 border-r-2 rotate-45 right-0 top-1/2 -translate-y-[60%]"></div>
          </span>
        </a>
      </div>
    </>
  );
};

Card.CardHeader = CardHeader;
Card.CardBody = CardBody;

export default Card;
