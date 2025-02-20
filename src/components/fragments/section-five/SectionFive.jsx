import Header from "../../elements/header";
import Arrow from "../../elements/section-five/arrow";
import BackArrow from "../../elements/section-five/back-arrow";
import CardContainer from "../../elements/section-five/cardContainer";
import SmallCard from "../../elements/section-five/smallCard";
import icon1 from "../../../assets/image/section5/diro_icon_1.png"
import icon2 from "../../../assets/image/section5/diro_icon_2.png"
import icon3 from "../../../assets/image/section5/diro_icon_3.png"
import icon4 from "../../../assets/image/section5/diro_icon_4.png"

const SectionFiveFragment = () => {
  return (
    <>
      <Header className="text-white mb-7 lg:mb-10 ">
        Your New Reservation Process!
      </Header>

      <div className="w-full grid grid-cols-1 grid-rows-7 md:grid-cols-7 md:grid-rows-1">
        <CardContainer>
          <SmallCard>
            <SmallCard.CardIcon icon={icon1} />
            <SmallCard.CardBody title="STEP 1">
              Easily Customized Your Reservation
            </SmallCard.CardBody>
          </SmallCard>
        </CardContainer>

        <Arrow />

        <CardContainer>
          <SmallCard>
            <SmallCard.CardIcon icon={icon2} />
            <SmallCard.CardBody title="STEP 2">
              Secure Payment & Confirmation Reminders
            </SmallCard.CardBody>
          </SmallCard>
        </CardContainer>

        <BackArrow />

        <CardContainer>
          <SmallCard>
            <SmallCard.CardIcon icon={icon3} />
            <SmallCard.CardBody title="STEP 3">
              On-Site Verify ID & Add-Ons
            </SmallCard.CardBody>
          </SmallCard>
        </CardContainer>

        <Arrow />

        <CardContainer>
          <SmallCard>
            <SmallCard.CardIcon icon={icon4} />
            <SmallCard.CardBody title="STEP 4">
              Automated Insights & Feedbacks
            </SmallCard.CardBody>
          </SmallCard>
        </CardContainer>
      </div>
    </>
  );
};

export default SectionFiveFragment;
