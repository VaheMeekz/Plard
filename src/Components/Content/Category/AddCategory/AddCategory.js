import React, {useCallback, useEffect, useRef, useState} from 'react';
import css from './AddCategory.module.css'
import close from '../../../../assets/images/x.svg'
import {NavLink, Route} from "react-router-dom";
import wooman from "../../../../assets/images/men.svg";
import ImageUpload from 'image-upload-react'
import 'image-upload-react/dist/index.css'
import {useDispatch, useSelector} from "react-redux";
import {ADD_CATEGORY_W, addCategoryMAC, addCategoryWAC} from "../../../../Redux/Actions/Category.actions";

const AddCategory = ({showModal, setShowModal, num, setNum,numM,setNumM}) => {

    const categortW = useSelector(state => state.categoryReducer.categoriesW)
    const categoryM = useSelector(state => state.categoryReducer.categoriesM)
    const dispatch = useDispatch();

    const addCategory = () => {
        if (name === '' && imageSrc === null) {
            return null;
        } else {
            dispatch(addCategoryWAC({id: Math.random(), name: name, img: imageSrc}))
            setName('')
            setImageSrc(null)
            setShowModal(prev => !prev)
        }
    }

    const addCtgM = () => {
        if (name === '' && imageSrc === null){
            return null;
        }else {
            dispatch(addCategoryMAC({id: Math.random(), name: name, img: imageSrc}))
            setName('')
            setImageSrc(null)
            setShowModal(prev => !prev)
        }
    }

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

    const [name, setName] = useState('')
    const [img, setImg] = useState('')

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]));
        }
    };

    const [imageSrc, setImageSrc] = useState()

    const handleImageSelect = (e) => {
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div className={css.addCategoryBody}>
            {showModal ? (
                    <div className={css.addCategoryBox}>
                        <h2>Добавить категория</h2>
                        <div>
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
                        </div>
                        <div>
                            <input type={"text"}
                                   placeholder={"Add Name"}
                                   className={css.addInp}
                                   value={name}
                                   onChange={(e) => {
                                       setName(e.target.value)
                                   }}
                            />
                        </div>
                        <div className={css.itemFile}>
                            <ImageUpload
                                handleImageSelect={handleImageSelect}
                                imageSrc={imageSrc}
                                setImageSrc={setImageSrc}
                                style={{
                                    width: ' 100px',
                                    height: '100px',
                                    background: 'white'
                                }}
                            />
                        </div>
                        <button
                            className={css.closeModal}
                            onClick={() => setShowModal(prev => !prev)}
                        >
                            <img src={close} alt={'close'}/>
                        </button>
                        <Route path={'/wooman'}>
                            <button
                                onClick={addCategory}
                                className={css.addBtn}
                            >
                                Add Category
                            </button>
                        </Route>
                        <Route path={'/man'}>
                            <button
                                onClick={addCtgM}
                                className={css.addBtn}
                            >
                                Add Category
                            </button>
                        </Route>
                    </div>
                )
                : null
            }
        </div>
    );
};

export default AddCategory;