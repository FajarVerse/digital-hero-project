const ListFooter = (props) => {
  const { children } = props;

  return (
    <>
      <li className="font-poppins font-[400] text-sm mb-2 text-black md:text-xs lg:text-sm">{children}</li>
    </>
  );
};

export default ListFooter;
