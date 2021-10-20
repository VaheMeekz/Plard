import React, {useCallback, useEffect, useRef, useState} from 'react';
import css from './AddItem.module.css'
import ItemAdder from "./ItemA/ItemAdder";

const AddItem = ({showAdd, setShowAdd, setNum, num, numM,setNumM,filpriceArr,setFilprice,filweightArr,setFilweight}) => {

    const modalRef = useRef();


    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowAdd(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showAdd) {
                setShowAdd(false);
                console.log('I pressed');
            }
        },
        [setShowAdd,showAdd]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div className={css.adderBody}>
            { showAdd ? (
                <div className={css.adderBox}>
                    <button className={css.adder} onClick={openModal}>+</button>
                    <ItemAdder showModal={showModal} setShowModal={setShowModal} setNum={setNum} num={num} numM={numM} setNumM={setNumM}
                               filpriceArr={filpriceArr} setFilprice={setFilprice} filweightArr={filweightArr} setFilweight={setFilweight}/>
                </div>
            )
                :null
            }
        </div>
    );
};

export default AddItem;