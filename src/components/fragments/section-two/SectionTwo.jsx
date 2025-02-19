import Header from "../../elements/header";
import Card from "../../elements/section-two/card";
import ilustrasi from "../../../assets/image/section2/diro_ilus_2.png"

const SectionTwoFragment = () => {
  return (
    <>
      <div className="w-full">
        <Header className="text-white">
          We've Listened and Understood Your Struggles
        </Header>

        <p className="font-poppins font-light text-sm text-white text-center mt-5 mb-3 px-5 lg:mb-0.5 xl:text-base">
          After years of research, weve crafted the ultimate solution to your
          business reservation challenges
        </p>
      </div>
      <div className="w-full absolute bottom-6 left-1/2 -translate-x-1/2 md:-bottom-25 lg:-bottom-40 xl:-bottom-56 2xl:-bottom-64 z-40">
        <img
          src={ilustrasi}
          alt=""
          className="scale-125 md:scale-70 lg:scale-55 xl:scale-60 2xl:scale-55"
        />
      </div>
      <div className="w-full absolute left-0">
        <Card
          className="left-1/2 -translate-x-1/2 translate-y-4 md:translate-y-6 xl:translate-y-8"
          title="Lack of Membership & Loyalty Tracking"
          desc="Regular customers have no way to track their usage, balances, or earn rewards, making retention harder."
        />
        <Card
          className="left-7 translate-y-36 md:left-36 lg:left-[15rem] xl:left-86 xl:translate-y-52"
          title="Double Bookings & Scheduling Conflicts"
          desc="Managing reservations manually leads to overlapping bookings, frustrating both customers and staff."
        />
        <Card
          className="left-3 translate-y-72 md:left-28 lg:left-52 xl:left-72 xl:translate-y-110"
          title="Inefficient Payment Process"
          desc="Customers often delay or cancel bookings due to complicated manual payment methods"
        />
        <Card
          className="right-7 translate-y-36 md:right-36 lg:right-[15rem] xl:right-86 xl:translate-y-52"
          title="Inflexible Pricing System"
          desc="Demand fluctuates throughout the week, but there's no way to adjust prices dynamically to optimize revenue."
        />
        <Card
          className="right-3 translate-y-72 md:right-28 lg:right-52 xl:right-72 xl:translate-y-110"
          title="Staff & Resource Allocation Issues"
          desc="Without proper management, staff schedules and resource availability often clash, reducing efficiency."
        />
      </div>
    </>
  );
};

export default SectionTwoFragment;
