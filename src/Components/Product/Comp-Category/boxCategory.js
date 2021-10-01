import "./SubCategory.css";

export const BoxCategory = (props) => {
  console.log(props.category);
  return (
    <>
      {props.category.map((p) => {
        return (
          <div
            className="boxCategory"
            onClick={() => {
              props.setsubcategory([p]);
              props.newsetsubcategorytext(props.newsubcategorytext.filter(s => s.id === p.id))
            }}
          >
            <img src={p.img} alt="" />
            <b>
              <p>{p.name}</p>
            </b>
          </div>
        );
      })}
    </>
  );
};