import Header from "../../elements/header";
import Card from "../../elements/section-three/card";
import icon1 from "../../../assets/image/section3/diro_icon_1.png"
import icon2 from "../../../assets/image/section3/diro_icon_2.png"
import icon3 from "../../../assets/image/section3/diro_icon_3.png"
import icon4 from "../../../assets/image/section3/diro_icon_4.png"
import icon5 from "../../../assets/image/section3/diro_icon_5.png"
import icon6 from "../../../assets/image/section3/diro_icon_6.png"

const SectionThreeFragment = () => {
  return (
    <>
      <div className="w-full mb-5 lg:mb-7 xl:mb-9">
        <Header>
          <span className="text-indigo-blue">DIRO's</span>{" "}
          <span className="bg-linear-to-r from-digital-aqua to-deep-blue inline-block bg-clip-text text-transparent">
            Powerful Features
          </span>
        </Header>
      </div>
      <div className="w-full flex flex-col items-center md:px-8 md:flex-row md:flex-wrap md:gap-0 md:place-content-around xl:px-28 xl:grid xl:grid-cols-3 xl:justify-items-center 2xl:px-60">
        <Card>
          <Card.CardHeader icon={icon1}>
            Automated & Real-Time Booking System
          </Card.CardHeader>
          <Card.CardBody
            list1="Prevents double booking and scheduling conflicts"
            list2="Customers can book, reschedule, or cancel easily"
            list3="Availability updates instantly across all platforms"
          />
        </Card>
        <Card>
          <Card.CardHeader icon={icon2}>
            Integrated Payment System
          </Card.CardHeader>
          <Card.CardBody
            list1="Supports instant payments (QRIS, e-wallets, bank transfer)"
            list2="Option for deposit-based or full payment to secure bookings"
            list3="Reduces no-shows and last-minute cancellations"
          />
        </Card>
        <Card>
          <Card.CardHeader icon={icon3}>
            Membership & Loyalty Management
          </Card.CardHeader>
          <Card.CardBody
            list1="Customers can track their packages, points, & rewards"
            list2="Supports subscription-based or package-based pricing"
            list3=" Increases customer retention & repeat bookings"
          />
        </Card>
        <Card>
          <Card.CardHeader icon={icon4}>Dynamic Pricing System</Card.CardHeader>
          <Card.CardBody
            list1="Adjusts prices based on demand (weekday/weekend)"
            list2="Allows special discounts & promotions for off-peak times"
            list3="Maximizes revenue without manual price adjustments"
          />
        </Card>
        <Card>
          <Card.CardHeader icon={icon5}>
            Staff & Resource Management
          </Card.CardHeader>
          <Card.CardBody
            list1="Automatically allocates staff/resources based on bookings"
            list2="Prevents overlapping schedules & underutilization"
            list3="Staff can view & manage their schedules easily"
          />
        </Card>
        <Card>
          <Card.CardHeader icon={icon6}>
            Analytics & Business Dashboard
          </Card.CardHeader>
          <Card.CardBody
            list1="Provides real-time data on reservations & revenue"
            list2="Tracks customer trends, best-selling services, & peak hours"
            list3="Helps in making data-driven business decisions"
          />
        </Card>
      </div>
    </>
  );
};

export default SectionThreeFragment;
