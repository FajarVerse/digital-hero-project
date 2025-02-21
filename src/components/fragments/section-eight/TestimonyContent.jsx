import CardTestimony from "../../elements/section-eight/cardTestimony";

const TestimonyContent = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-20 md:flex-row md:gap-0">
        <CardTestimony className="lg:translate-x-5 xl:translate-x-14">
          <CardTestimony.CardHeader
            name="David Susanto"
            business="Babersho"
            description="Owner of Urban Cuts Berbershop, Bandun"
          />
          <CardTestimony.CardBody>
            “DIRO has completely transformed our booking process. We've seen a
            significant increase in efficiency and customer satisfaction.”
          </CardTestimony.CardBody>
        </CardTestimony>
        <CardTestimony className="lg:-translate-x-5 xl:-translate-x-20">
          <CardTestimony.CardHeader
            name="Sarah Wijaya"
            business="Beauty Clinic"
            description="Owner of Glow & Grace Beauty Clinic, Jakarta"
          />
          <CardTestimony.CardBody>
            “DIRO has completely transformed our booking process. We've seen a
            significant increase in efficiency and customer satisfaction”
          </CardTestimony.CardBody>
        </CardTestimony>
      </div>
    </>
  );
};

export default TestimonyContent;
