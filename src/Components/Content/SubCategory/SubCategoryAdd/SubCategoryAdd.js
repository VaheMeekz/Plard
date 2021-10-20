import React, {useCallback, useEffect, useRef, useState} from 'react';
import css from "./SubCategoryAdd.module.css"
import {useDispatch, useSelector} from "react-redux";
import {subcatigoryReducer} from "../../../../Redux/Reducers/SubCategory.reducer";
import {addsubcatMAC, addsubcatWAC,} from "../../../../Redux/Actions/SubcAt.actions";
import {addCategoryWAC} from "../../../../Redux/Actions/Category.actions";
import {Route} from "react-router-dom";
import AddItem from "../../AddItem/AddItem";
import {addItemWAC} from "../../../../Redux/Actions/item.actions";

const SubCategoryAdd = ({showModal, setShowModal,setStateW, setNum, num,numM,setNumM,filpriceArr,setFilprice,filweightArr,setFilweight}) => {

    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    //sub funk

    const [name, setName] = useState('')

    const subcategortW = useSelector(state => state.subcatigoryReducer.subcatW)
    const subcategortM = useSelector(state => state.subcatigoryReducer.subcatM)
    const dispatch = useDispatch();

    const addSub = () => {
        if (name === '') {
            return null
        } else {
            dispatch(addsubcatWAC({id: Math.random(), name: name}))
            setName('')
        }
        setShowModal(prev => !prev)
    }
    const addSubM = () => {
        if (name === '') {
            return null
        } else {
            dispatch(addsubcatMAC({id: Math.random(), name: name}))
            setName('')
        }
        setShowModal(prev => !prev)
    }

    //check subCat
    const [checkSubCat, setCekSubCat] = useState('#FFFFFF')

    const check = () => {
        setCekSubCat('#0008C1')
    }

    const [showAdd, setShowAdd] = useState(false);

    const openItemAdd = () => {
        setShowAdd(p=> !p);
    }

    return (
        <div>
            <Route path={'/wooman'}>
                <div className={css.subNameBox}>
                    {
                        subcategortW.map(w => {
                            return <div key={w.id} className={css.subName}>
                                <button onClick={openItemAdd}  className={css.addBtn}>
                                    {w.name}
                                </button>
                            </div>
                        })
                    }
                    <div className={css.addBtnBox}>
                    <AddItem showAdd={showAdd} setShowAdd={setShowAdd} setNum={setNum} num={num}
                             filpriceArr={filpriceArr} setFilprice={setFilprice} filweightArr={filweightArr} setFilweight={setFilweight}/>
                    </div>
                    </div>

            </Route>
            <Route path={'/man'}>
                <div className={css.subNameBox}>
                    {
                        subcategortM.map(m => {
                            return <div key={m.id} className={css.subName}>
                                <button onClick={openItemAdd} className={css.addBtn}>
                                    {m.name}
                                </button>
                            </div>
                        })
                    }
                    <div className={css.addBtnBox}>
                    <AddItem showAdd={showAdd} setShowAdd={setShowAdd} setStateW={setStateW} numM={numM} setNumM={setNumM}/>
                    </div>
                </div>
            </Route>
            {showModal ? (
                    <div className={css.subCatAdderBox}>
                        <h3>добавить подкатегория</h3>
                        <div>
                            <input type={'text'}
                                   placeholder={'добавить подкатегория'}
                                   value={name}
                                   className={css.subCatAdderInp}
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <Route path={'/wooman'}>
                            <div>
                                <button
                                    className={css.subCatAdderBtn}
                                    onClick={addSub}
                                >Add
                                </button>
                            </div>
                        </Route>
                        <Route path={'/man'}>
                            <div>
                                <button
                                    className={css.subCatAdderBtn}
                                    onClick={addSubM}
                                >Add
                                </button>
                            </div>
                        </Route>
                    </div>
                )
                : null}

        </div>
    );
};

export default SubCategoryAdd;