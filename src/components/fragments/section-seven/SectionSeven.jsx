import Header from "../../elements/header";
import PaymentContent from "./PaymentContent";

const SectionSevenFragment = () => {
  return (
    <>
      <div className="w-full mb-5">
        <Header>
          <span className="bg-linear-to-r from-digital-aqua to-deep-blue bg-clip-text text-transparent">
            Seamless
          </span>{" "}
          <span className="text-indigo-blue">Integrations</span>
        </Header>
      </div>
      <PaymentContent />
    </>
  );
};

export default SectionSevenFragment;
