import React, {useCallback, useEffect, useRef, useState} from 'react';
import style from './Sub.module.css'
import SubCategoryAdd from "./SubCategoryAdd/SubCategoryAdd";

const Sub = ({showSub, setShowSub,setStateW,setNum, num,numM,setNumM,filpriceArr,setFilprice,filweightArr,setFilweight}) => {

    const subRef = useRef();

    const closeModal = e => {
        if (subRef.current === e.target) {
            setShowSub(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showSub) {
                setShowSub(false);
                console.log('I pressed');
            }
        },
        [setShowSub, showSub]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    //
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div className={style.subBox}>
        {showSub ? (
                    <div className={style.subBoy}>
                        <div>
                        <SubCategoryAdd showModal={showModal} setShowModal={setShowModal} setStateW={setStateW} setNum={setNum} num={num} numM={numM} setNumM={setNumM}
                                        filpriceArr={filpriceArr} setFilprice={setFilprice} filweightArr={filweightArr} setFilweight={setFilweight}/>
                        </div>
                        <button onClick={openModal}
                            // onClick={() => setShowSub(prev => !prev)}
                                className={style.Btn}
                        >+</button>
                    </div>
                )
                : null
        }
        </div>
    );
};

export default Sub;