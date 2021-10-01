import React, {useRef, useEffect, useCallback} from "react";
import ImageUploading from "react-images-uploading";
import {useState} from "react";
import css from "./Adder.module.css";
import {useItem} from "../../../../Providers/ItemProvider";
import close from "../../../../Svg/x.svg"

const Adder = ({showModal, setShowModal}) => {
    const modalRef = useRef();

    const {item, setItem, addSkills} = useItem()

    //Inputes Value
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemWeight, setItemWeight] = useState("");
    const [itemCarat, setItemCarat] = useState("");
    const [newSkill, setNewSkill] = useState('')

    //Inputes Value Functions
    const getItemName = (e) => {
        e.preventDefault();
        setItemName(e.target.value);
    };
    const getItemPrice = (e) => {
        e.preventDefault();
        setItemPrice(e.target.value);
    };
    const getItemWeight = (e) => {
        e.preventDefault();
        setItemWeight(e.target.value);
    };
    const getItemCarat = (e) => {
        e.preventDefault();
        setItemCarat(e.target.value);
    };


    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
                console.log("I pressed");
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);
    const [images, setImages] = React.useState([]);
    const maxNumber = 4;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };


    return (
        <>
            {showModal ? (
                <div className={css.adder}>
                    <div className={css.adderName}>
                        <h1>добавить изделия</h1>
                        <hr/>
                    </div>
                    <div className={css.aderForm}>
                        <h2>Add Product</h2>
                        <form>
                            <div className={css.adderInputsBox}>
                                <h4>Product Name</h4>
                                <input
                                    type="text"
                                    placeholder={"Type Name"}
                                    onChange={getItemName}
                                    value={itemName}
                                    className={css.AdderInputs}
                                ></input>
                            </div>
                            <div>
                                <h4>Product Price</h4>
                                <input
                                    type="text"
                                    placeholder={"Type Price"}
                                    onChange={getItemPrice}
                                    value={itemPrice}
                                    className={css.AdderInputs}
                                ></input>
                            </div>
                            <div>
                                <h4>Product Weight</h4>
                                <input
                                    type="text"
                                    placeholder={"Type Weight"}
                                    onChange={getItemWeight}
                                    value={itemWeight}
                                    className={css.AdderInputs}
                                ></input>
                            </div>
                            <div>
                                <h4>Product Carat</h4>
                                <input
                                    type="text"
                                    placeholder={"Type Carat"}
                                    onChange={getItemCarat}
                                    value={itemCarat}
                                    className={css.AdderInputs}
                                ></input>
                            </div>
                        </form>
                    </div>
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                    >
                        {({
                              imageList,
                              onImageUpload,
                              onImageRemoveAll,
                              onImageUpdate,
                              onImageRemove,
                              isDragging,
                              dragProps,
                          }) => (
                            // write your building UI

                            <div className={css.uploadImageWrapper}>
                                <div className={css.ImageUploadingParagraph}>
                                    <h5>добавить фото</h5>
                                </div>
                                <button
                                    style={isDragging ? {color: "red"} : undefined}
                                    className={css.adderBtn}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    добавить
                                </button>
                                {imageList.map((image, index) => (
                                    <div key={index} className={css.imageItem}>
                                        <div className={css.imageItemImg}>
                                            <img src={image["data_url"]} alt="" width="70"/>
                                        </div>
                                        {localStorage.setItem("image", image["data_url"])}

                                        <div className={css.imageItemBtnWrapper}>

                                            <br/>
                                            <button
                                                className={css.adderBtnUpd}
                                                onClick={() => onImageRemove(index)}
                                            >
                                                удалить
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button className={css.closeBtn}
                                        onClick={() => setShowModal((prev) => !prev)}
                                ><img src={close}/></button>
                                <button
                                    aria-label="Close modal"
                                    className={css.adderButton}
                                    onClick={() => {addSkills({
                                        id: Math.random(),
                                        name: itemName,
                                        price: itemPrice,
                                        weight: itemWeight,
                                        carat: itemCarat,
                                        img: <img src={localStorage.getItem('image')} width={'180px'} height={'80px'}/>
                                    })
                                        setNewSkill('')
                                    }}
                                >добавить</button>
                            </div>
                        )}
                    </ImageUploading>
                </div>
            ) : null}
        </>
    );
};
export default Adder;
