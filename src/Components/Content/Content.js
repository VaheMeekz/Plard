import React, {useState} from 'react';
import {useItem} from "../../Providers/ItemProvider";
import css from "./Content.module.css"
import ring from "../../Svg/ring.jpg"
import edit from "../../Svg/edit.png"
import Adder from "../Product/Comp-Product/Adder/Adder";
import Edit from "../Edit/Edit";
import hhh from "../../Svg/archive.svg"
import save from "../../Svg/check-circle.svg";

const Content = () => {

    const {item, setItem, addIt, editItem, deleteSkills} = useItem()


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
                                {showEdit[id]
                                    ?   <div className={css.editInput}>
                                            <input
                                            className={css.editInp}
                                            value={editValue[id]}
                                            onChange={e => setEditValue({[id]: e.target.value})}
                                            type="text"
                                            />
                                         </div>
                                    : null
                                }
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
                                    {showEdit[id] ? <img src={save} className={css.saveBtn}/> : <img src={edit}/>}
                                </button>
                                <button
                                    className={css.deleteBtn}
                                    onClick={() => deleteSkills(id)}
                                >
                                    <img src={hhh}/>
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