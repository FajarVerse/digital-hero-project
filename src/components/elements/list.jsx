import { Check } from "@phosphor-icons/react";

const List = (props) => {
  const { className, children, color } = props;

  return (
    <>
      <li className="flex gap-2 items-start">
        <span className={`p-1 mt-1 rounded-full inline-block mb-5 ${className} lg:p-[0.15rem]`}>
          <Check size={15} weight="bold" color={color} className="lg:w-3 lg:h-3" />
        </span>
        <span className="font-poppins font-[400] text-sm text-indigo-blue md:text-xs">
          {children}
        </span>
      </li>
    </>
  );
};

export default List;
