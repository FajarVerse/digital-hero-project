import { Check } from "@phosphor-icons/react";

const ListBigCard = (props) => {
  const { children, color, className, listColor} = props;

  return (
    <>
      <li className="flex gap-3 items-center">
        <span
          className={`p-1 rounded-full inline-block ${className} lg:p-[0.15rem]`}
        >
          <Check
            size={15}
            weight="bold"
            color={color}
            className="w-3 h-3 md:w-2 md:h-2 lg:w-4 lg:h-4"
          />
        </span>
        <span
          className={`font-dm-sans font-[400] text-[0.9rem] md:text-xs lg:text-sm xl:text-lg ${listColor}`}
        >
          {children}
        </span>
      </li>
    </>
  );
};

export default ListBigCard;
