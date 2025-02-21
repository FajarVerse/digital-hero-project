import shapeContact from "../../../assets/image/section9/shape_contact.png";

const ShapeContact = ({ className }) => {
  return (
    <>
      <img
        src={shapeContact}
        alt=""
        className={`absolute w-[12rem] lg:w-[20rem] xl:w-[30rem] ${className}`}
      />
    </>
  );
};

export default ShapeContact;
