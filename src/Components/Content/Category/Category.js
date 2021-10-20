import React, {useState} from 'react';
import css from './Category.module.css'
import wooman from '../../../assets/images/men.svg'
import plus from '../../../assets/images/plus.svg'
import {NavLink, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import AddCategory from "./AddCategory/AddCategory";
import Sub from "../SubCategory/Sub";

const Category = ({setStateW, setNum, num,setNumM,numM,filpriceArr,setFilprice,filweightArr,setFilweight }) => {

    const categortW = useSelector(state => state.categoryReducer.categoriesW)
    const categoryM = useSelector(state => state.categoryReducer.categoriesM)

    const [border, setBorder] = useState('#FFFFFF')
    const [borderW, setBorderW] = useState('#FFFFFF')

    const checkGender = () => {
        setBorder('#0008C1')
        setBorderW('#FFFFFF')
    }
    const checkGenderW = () => {
        setBorderW('#0008C1')
        setBorder('#FFFFFF')
    }

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const [showSub, setShowSub] = useState(false);
    const openSubAdd = () => {
        setShowSub(prev => !prev);
    };

    return (
        <div className={css.category}>
            <div className={css.genterBox}>
                <NavLink to={'/wooman'}>
                    <div className={css.genderBody} style={{borderColor: borderW}} onClick={checkGenderW}>
                        <img src={wooman} alt={'img'}/>
                    </div>
                </NavLink>
                <NavLink to={'/man'}>
                    <div className={css.genderBody} style={{borderColor: border}} onClick={checkGender}>
                        <img src={wooman} alt={'img'}/>
                    </div>
                </NavLink>
            </div>
            <div className={css.addCategoryBox}>
                <div className={css.newCategoryBox}>
                    <Route path={'/wooman'}>
                        <div className={css.staticCategory}>
                            {categortW.map(w => {
                                return (
                                    <div key={w.it} className={css.categoryItem}>
                                        <button onClick={openSubAdd} className={css.categoryItemBtn}>
                                            <div className={css.categoryItemImg}>
                                                <img src={w.img} width={'70px'} height={'70px'}/>
                                            </div>
                                            <div>
                                                {w.name}
                                            </div>
                                        </button>
                                    </div>
                                )
                            })}
                            <Sub showSub={showSub} setShowSub={setShowSub} setStateW={setStateW} setNum={setNum} num={num}
                                 filpriceArr={filpriceArr} setFilprice={setFilprice} filweightArr={filweightArr} setFilweight={setFilweight}/>
                        </div>
                    </Route>
                    <Route path={'/man'}>
                        <div className={css.staticCategory}>
                            {categoryM.map(m => {
                                return (
                                    <div key={m.id} className={css.categoryItem}>
                                        <button onClick={openSubAdd} className={css.categoryItemBtn}>
                                            <div className={css.categoryItemImg}>
                                                <img src={m.img}  width={'70px'} height={'70px'}/>
                                            </div>
                                            <div>
                                                {m.name}
                                            </div>
                                        </button>
                                    </div>
                                )
                            })}
                            <Sub showSub={showSub} setShowSub={setShowSub} numM={numM} setNumM={setNumM}/>
                        </div>
                    </Route>
                    <div>
                        <button className={css.categoryAddBtn} onClick={openModal}>
                            <img src={plus} alt={'plus'} width={'20px'} height={'40px'}/>
                        </button>
                        <AddCategory showModal={showModal} setShowModal={setShowModal} num={num} setNum={setNum} numM={numM} setNumM={setNumM}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;