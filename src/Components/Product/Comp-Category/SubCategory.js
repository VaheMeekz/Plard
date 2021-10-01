import {useState} from "react";
import Adder from "../Comp-Product/Adder/Adder";
import {useItem} from "../../../Providers/ItemProvider";

export const SubCategory = (props) => {
  console.log(props.subcategory);

  const [cloased, setCloased] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {props.subcategory.map((p) => {
        return (
          <div className="subcategory">
            {props.newsubcategorytext.map((s) => {
              return (
                  <>
                <p>
                  <b> {s.name}</b>
                  <button className={"subcatecoryAdder"}
                          value={cloased}
                          onClick={openModal}
                  >+</button>

                </p>
              <div className={"subCategoryAdderBody"}>
                <Adder showModal={showModal} setShowModal={setShowModal} exact/>
              </div>
                  </>
              );
            })}
            <div className="addSubcategory">
              <p
                onClick={() => {
                  props.setaddclass2(true);
                  props.close();
                }}
              >
                <i className="fas fa-plus"></i>
              </p>
              <div
                className={`${
                  props.addclass2 ? "window-subcategory" : "close-subcategory"
                }`}
              >
                <div className="cont-window">
                  <h3>добавить подкатегория</h3>
                  <input
                    type="text"
                    placeholder="подкатегория"
                    value={props.subcategorytext}
                    onChange={(e) => {
                      props.setsubcategorytext(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      props.newsetsubcategorytext([
                        ...props.newsubcategorytext,
                        {
                          name: props.subcategorytext,
                          id: p.id,
                        },
                      ]);
                      props.setaddclass2(false);
                    }}
                  >
                    <b>добавить</b>{" "}
                  </button>
                  <p
                    className="contWindowClose"
                    onClick={() => props.setaddclass2(false)}
                  >
                    <i className="fas fa-times"></i>
                  </p>

                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
