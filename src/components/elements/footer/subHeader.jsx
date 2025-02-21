const SubHeader = ({ children }) => {
  return (
    <>
      <h3 className="font-poppins font-bold text-base text-black my-4 md:text-sm md:my-1 md:mb-3 lg:text-base">
        {children}
      </h3>
    </>
  );
};

export default SubHeader;
