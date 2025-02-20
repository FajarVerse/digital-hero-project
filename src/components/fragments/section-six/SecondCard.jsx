import BigCard from "../../elements/section-six/bigCard";
import icon2 from "../../../assets/image/section6/diro_icon_2.png";
const SecondCard = () => {
  const list = [
    "Everything in the Basic Plan",
    "Advanced Analytics Dashboard",
    "Loyalty & Rewards Program Management",
    "Multi-location Management",
  ];

  return (
    <>
      <BigCard className="md:mb-14 lg:mb-20 bg-linear-to-r from-digital-aqua to-deep-blue">
        <BigCard.BigCardHeader
          icon={icon2}
          title="Pro"
          bgIcon="bg-white"
          textColor="text-white"
          titleColor="text-white"
          opacityBtn="opacity-100"
        />
        <BigCard.BigCardBody
          price="Rp 499K"
          date="/monthly"
          textColor="text-white"
          priceColor="text-white"
        >
          Growing businesses with higher booking volume and more complex needs,
          including multiple staff and customers to manage.
        </BigCard.BigCardBody>
        <BigCard.BigCardFooter
          lists={list}
          btnTeks="Get Started"
          textColor="text-white"
          btnTextColor="bg-linear-to-r from-digital-aqua to-deep-blue bg-clip-text text-transparent"
          btnColor="bg-white"
          iconColor="#0072FF"
          bgIcon="bg-white"
        />
      </BigCard>
    </>
  );
};

export default SecondCard;
