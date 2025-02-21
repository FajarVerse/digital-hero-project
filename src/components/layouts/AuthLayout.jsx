const AuthLayout = (props) => {
  const { className, children, id } = props;

  return (
    <>
      <section className={`min-h-screen pt-22 pb-10 ${className}`} id={id}>
        <div className=" container mx-auto">{children}</div>
      </section>
    </>
  );
};

export default AuthLayout