import React, {useState} from 'react';
import {useItem} from "../../Providers/ItemProvider";
import css from "./Content.module.css"
import ring from "../../Svg/ring.jpg"
import edit from "../../Svg/edit.png"
import Adder from "../Product/Comp-Product/Adder/Adder";
import Edit from "../Edit/Edit";

const Content = () => {

    const {item, setItem, editItem} = useItem()


    const [showEdit, setShowEdit] = useState({})


    const [editValue, setEditValue] = useState({})


    return (
        <div className={css.content}>
            <div className={css.contentBox}>
                {item.map(({id, name, price, img}) => {
                    return (
                        <div className={css.contentItem} key={id}>
                            <div className={css.contentItemImg}><span>{img}</span></div>
                            <div className={css.contentItemInfo}>
                                <div>{name}</div>
                                <div>{price}</div>
                                <div>

                                </div>

                                   {/*{showEdit[id]*/}
                                   {/* ? <input*/}
                                   {/*     value={editValue[id]}*/}
                                   {/*     onChange={e => setEditValue({[id]: e.target.value})}*/}
                                   {/*     type="text"*/}
                                   {/* />*/}
                                   {/* : null}*/}
                                <button
                                    className={css.editBtn}
                                    onClick={showEdit[id]
                                        ? () => {
                                            editItem(id, editValue[id])
                                            setShowEdit({})
                                        }
                                        : () => {
                                            setShowEdit({[id]: true})
                                            setEditValue({[id]: name})
                                        }}
                                >
                                    {showEdit[id] ? "Save" : <img src={edit}/>}
                                </button>

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Content;