import React, {useCallback, useEffect, useRef, useState} from 'react';
import css from './ItemAdder.module.css'
import close from '../../../../assets/images/x.svg'
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Route} from "react-router-dom";
import wooman from "../../../../assets/images/men.svg";
import {addsubcatWAC} from "../../../../Redux/Actions/SubcAt.actions";
import {addItemMAC, addItemWAC, loadAC} from "../../../../Redux/Actions/item.actions";
import ImageUpload from "image-upload-react";

const ItemAdder = ({showModal, setShowModal, setNum, num,numM,setNumM,filpriceArr,setFilprice,filweightArr,setFilweight}) => {

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

    const [imageSrc, setImageSrc] = useState()

    const handleImageSelect = (e) => {
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }


    const categortW = useSelector(state => state.categoryReducer.categoriesW)
    const categoryM = useSelector(state => state.categoryReducer.categoriesM)

    const subcategortW = useSelector(state => state.subcatigoryReducer.subcatW)
    const subcategortM = useSelector(state => state.subcatigoryReducer.subcatM)

    const load = useSelector(state => state.ItemReducer.load)

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [articule, setArtcule] = useState('')
    const [price, setPrice] = useState('')
    const [ves, setVes] = useState('')
    const [loadd, setLoadd] = useState(load)

    useEffect(() => {
        dispatch(loadAC(loadd))
        console.log(loadd)
    },[])


    const addItemW = () => {
        if (name === ' ' && articule === ' ' && price === ' ' && imageSrc === null) {
            return null
        } else {
            setNum([...num, {
                id: Math.random(),
                name: name,
                artikul: articule,
                img: imageSrc,
                price:price,
                order: Math.random(),
                ves:ves
            }])
            dispatch(addItemWAC({
                id: Math.random(),
                name: name,
                artikul: articule,
                img: imageSrc,
                price:price,
                order: Math.random(),
                ves:ves
            }))
            // setStateW([...stateW,])
            dispatch(loadAC(true))
            setName('')
            setArtcule('')
            setPrice(' ')
            setImageSrc(null)
            setShowModal(prev => !prev)
        }
    }

    const addItemM = () => {
        if (name === ' ' && articule === ' ' && price === ' ' && imageSrc === null) {
            return null
        } else {
            setNumM([...numM ,{
                id: Math.random(),
                name: name,
                artikul: articule,
                price:price,
                img: imageSrc,
                order: Math.random(),
                ves:ves
            }])
            dispatch(addItemMAC({
                id: Math.random(),
                name: name,
                artikul: articule,
                price:price,
                img: imageSrc,
                order: Math.random(),
                ves:ves
            }))
            setLoadd(true)
            setName('')
            dispatch(loadAC(true))
            setArtcule('')
            setPrice(' ')
            setImageSrc(null)
            setShowModal(prev => !prev)
        }
    }

    return (
        <div className={css.adderBox}>
            {
                showModal ? (
                        <div className={css.adderBody}>
                            <div className={css.closeBtnBox}>
                                <button className={css.closeBtn}
                                        onClick={() => setShowModal(prev => !prev)}
                                ><img src={close}/></button>
                            </div>

                            <div>
                                <div className={css.genterBox}>
                                    <NavLink to={'/wooman'}>
                                        <div className={css.genderBody} style={{borderColor: borderW}}
                                             onClick={checkGenderW}>
                                            <img src={wooman} alt={'img'}/>
                                            Woomane
                                        </div>

                                    </NavLink>
                                    <NavLink to={'/man'}>
                                        <div className={css.genderBody} style={{borderColor: border}} onClick={checkGender}>
                                            <img src={wooman} alt={'img'}/>
                                            Man
                                        </div>

                                    </NavLink>
                                </div>
                            </div>
                            <div>
                                <Route path={'/wooman'}>
                                    {
                                        categortW.map(w => {
                                            return <span key={w.id} className={css.categories}>
                                                    {w.name}
                                                </span>
                                        })
                                    }
                                </Route>
                                <Route path={'/man'}>
                                    {
                                        subcategortW.map(m => {
                                            return <span key={m.id} className={css.categories}>
                                                    {m.name}
                                                </span>
                                        })
                                    }
                                </Route>
                            </div>
                            <div>
                                <Route path={'/wooman'}>
                                    {
                                        subcategortW.map(w => {
                                            return <span key={w.id} className={css.subCategories}>
                                                    {w.name}
                                                </span>
                                        })
                                    }
                                </Route>
                                <Route path={'/man'}>
                                    {
                                        subcategortM.map(m => {
                                            return <span key={m.id} className={css.subCategories}>
                                                    {m.name}
                                                </span>
                                        })
                                    }
                                </Route>
                            </div>
                            <div className={css.adderInputsBody}>
                                <div>
                                    <ImageUpload
                                        handleImageSelect={handleImageSelect}
                                        imageSrc={imageSrc}
                                        setImageSrc={setImageSrc}
                                        style={{
                                            width: 400,
                                            height: 300,
                                            background: 'gray'
                                        }}
                                    />
                                </div>
                                <div>
                                    <div className={css.adderInputsBox}>
                                        <p>name</p>
                                        <input type={'text'} placeholder={'name'} className={css.adderInputs}
                                               onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className={css.adderInputsBox}>
                                        <p>articule</p>
                                        <input type={'text'} placeholder={'articule'} className={css.adderInputs}
                                               onChange={(e) => setArtcule(e.target.value)}/>
                                    </div>
                                    <div className={css.adderInputsBox}>
                                        <p>price</p>
                                        <input type={'number'} placeholder={'price'} className={css.adderInputs}
                                               onChange={(e) => setPrice(e.target.value)}/>
                                    </div>
                                    <div className={css.adderInputsBox}>
                                        <p>weight</p>
                                        <input type={'number'} placeholder={'weight'} className={css.adderInputs}
                                               onChange={(e) => setVes(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className={css.addBtnBox}>
                                <Route path={'/wooman'}>
                                    <button className={css.addBtn} onClick={addItemW}>
                                        Add Item
                                    </button>
                                </Route>
                                <Route path={'/man'}>
                                    <button className={css.addBtn} onClick={addItemM}>
                                        Add Item
                                    </button>
                                </Route>
                            </div>
                        </div>
                    )
                    : null
            }

        </div>
    );
};

export default ItemAdder;