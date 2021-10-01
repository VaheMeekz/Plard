import "./AddProduct.css";

export const AddProduct = (props) => {
  return (
    <>
      <div className="addclass">
        <b>
          {" "}
          <i className="fas fa-plus"></i>
        </b>
      </div>
      <div className="addProduct">
        <div className="addCategory2">
          {props.category.map((p) => {
            return (
              <div className="boxCategory boxCategory2">
                <img src={p.img} alt="" />
                <b>
                  <p>{p.name}</p>
                </b>
              </div>
            );
          })}
        </div>
        {props.state.map(() => {
          return (
            <>
              {props.newsubcategorytext.map((m) => {
                return (
                  <p>
                    <b> {m.text}</b>
                  </p>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
};
