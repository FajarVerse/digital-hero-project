import BigCard from "../../elements/section-six/bigCard";
import icon1 from "../../../assets/image/section6/diro_icon_1.png";

const FirstCard = () => {
  const list = [
    "Smart Scheduling with customizable options",
    "Basic Analytics Dashboard",
    "Calendar and Price Settings Management",
    "Offline Booking Sync",
  ];

  return (
    <>
      <BigCard className="bg-white">
        <BigCard.BigCardHeader
          icon={icon1}
          title="Basic"
          bgIcon="bg-deep-blue/20"
          textColor="text-slate-purple"
          titleColor="text-indigo-blue"
          opacityBtn="opacity-0"
        />
        <BigCard.BigCardBody
          price="Rp 299K"
          date="/monthly"
          textColor="text-slate-purple"
          priceColor="text-indigo-blue"
        >
          Small businesses that are just starting to implement an automated
          booking system. Ideal for businesses with fewer bookings and staff
        </BigCard.BigCardBody>
        <BigCard.BigCardFooter
          lists={list}
          btnTeks="Get Started"
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

export default FirstCard;
