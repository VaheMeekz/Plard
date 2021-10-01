import "./SubCategory.css";
import man from "../../../Svg/Vector.svg"

export const BoxCategory = (props) => {
  return (
    <>
      {props.state2.map((p) => {
        return (
          <>
            <div
              className="boxCategory"
              onClick={() => {
                props.setstate([p]);
              }}
            >
              <img src={p.img}/>
              <b>
                <p>{p.name}</p>
              </b>
            </div>
          </>
        );
      })}
    </>
  );
};
