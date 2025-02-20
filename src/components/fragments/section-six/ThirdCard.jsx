import BigCard from "../../elements/section-six/bigCard";
import icon3 from "../../../assets/image/section6/diro_icon_3.png";

const ThirdCard = () => {
  const list = [
    "Everything in the Pro Plan",
    "Dedicated Account Manager",
    "Unlimited bookings, customers, and staff",
    "Full customization of the booking page and user settings",
  ];

  return (
    <>
      <BigCard>
        <BigCard.BigCardHeader
          icon={icon3}
          title="Enterprise"
          bgIcon="bg-deep-blue/20"
          textColor="text-slate-purple"
          titleColor="text-indigo-blue"
          opacityBtn="opacity-0"
        />
        <BigCard.BigCardBody
          price="Contact Us"
          textColor="text-slate-purple"
          priceColor="text-indigo-blue"
        >
          Large businesses or chains require a tailored, high-volume, and fully
          integrated booking system with dedicated support and custom features.
        </BigCard.BigCardBody>
        <BigCard.BigCardFooter
          lists={list}
          btnTeks="Contact Us"
          textColor="text-indigo-blue"
          btnTextColor="text-white"
          btnColor="bg-linear-to-r from-digital-aqua to-deep-blue"
          iconColor="white"
          bgIcon="bg-linear-to-r from-digital-aqua to-deep-blue"
        />
      </BigCard>
    </>
  );
};

export default ThirdCard;
