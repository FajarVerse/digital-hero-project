const AuthLayout = (props) => {
  const { className, children } = props;

  return (
    <>
      <section className={`min-h-screen py-26 pb-32 ${className}`}>
        <div className=" container mx-auto">{children}</div>
      </section>
    </>
  );
};

export default AuthLayout