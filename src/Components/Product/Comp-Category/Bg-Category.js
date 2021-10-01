export const BgCategory = (props) => {
  return (
    <>
      {" "}
      <div
        className={`${props.addclass ? "bg-category" : "CloseBgProduct"}`}
      ></div>
      <div
        className={`${props.addclass2 ? "bg-category" : "CloseBgProduct"}`}
      ></div>
    </>
  );
};
