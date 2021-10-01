import "./AddProduct.css";
import {useState} from "react";
import plus from "../../../Svg/man.svg"
import Adder from "./Adder/Adder";


export const AddProduct = () => {

    const [cloased, setCloased] = useState(0);
    const [showModal, setShowModal] = useState(false);


    const openModal = () => {
        setShowModal((prev) => !prev);
    };


    return (
        <div className="addclass">
            <b>
                <img src={plus} alt={"plus"}/>
            </b>
        </div>
    );
};
