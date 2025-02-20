import Payment from "../../elements/section-seven/payment";
import payment1 from "../../../assets/image/section7/payment_1.png";
import payment2 from "../../../assets/image/section7/payment_2.png";
import payment3 from "../../../assets/image/section7/payment_3.png";
import payment4 from "../../../assets/image/section7/payment_4.png";
import payment5 from "../../../assets/image/section7/payment_5.png";
import payment6 from "../../../assets/image/section7/payment_6.png";
import payment7 from "../../../assets/image/section7/payment_7.png";
import payment8 from "../../../assets/image/section7/payment_8.png";
import payment9 from "../../../assets/image/section7/payment_9.png";
import payment10 from "../../../assets/image/section7/payment_10.png";
import payment11 from "../../../assets/image/section7/payment_11.png";
import payment12 from "../../../assets/image/section7/payment_12.png";
import payment13 from "../../../assets/image/section7/payment_13.png";
import payment14 from "../../../assets/image/section7/payment _14.png";

const PaymentContent = () => {
  return (
    <>
      <div className="grid grid-cols-3 justify-items-center md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        <Payment image={payment1} />
        <Payment image={payment2} />
        <Payment image={payment3} />
        <Payment image={payment4} />
        <Payment image={payment5} />
        <Payment image={payment6} />
        <Payment image={payment7} />
        <Payment image={payment8} />
        <Payment image={payment9} />
        <Payment image={payment10} />
        <Payment image={payment11} />
        <Payment image={payment12} />
        <Payment
          image={payment13}
          className="lg:col-start-3 xl:col-start-auto"
        />
        <Payment image={payment14} />
      </div>
    </>
  );
};

export default PaymentContent;
