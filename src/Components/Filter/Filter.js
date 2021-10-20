import React, {useCallback, useEffect, useRef, useState} from 'react';
import css from './Filter.module.css'
import {useDispatch, useSelector} from "react-redux";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {priceAC, weightAC} from "../../Redux/Actions/item.actions";

const Filter = ({showModal, setShowModal}) => {

    //close Modal
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

    //redux

    const weight = useSelector(state => state.ItemReducer.weight)
    const price = useSelector(state => state.ItemReducer.price)
    const dispatch = useDispatch()


    //filter

    // Our States
    const [filweight, setFilweight] = useState([500, 1000]);

    // Changing State when volume increases/decreases
    const rangeSelectorWeight = (event, newValue) => {
        setFilweight(newValue);
    };

    // Our States
    const [filprice, setFilprice] = useState([4000, 5000]);

    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
        setFilprice(newValue);
    };

    const setValu = (e) => {
        dispatch(weightAC(filweight))
        dispatch(priceAC(filprice))
        setShowModal(prev => !prev)
    }


    return (
        <div className={css.filterBox}>
            {showModal ? (
                    <div className={css.filterBody}>
                        <h3>фильтр </h3>
                        <div>
                            <Typography id="range-slider" gutterBottom>
                                вес золота
                            </Typography>
                            <Slider
                                value={filweight}
                                onChange={rangeSelectorWeight}
                                valueLabelDisplay="auto"
                                min={0}
                                max={2000}
                            />
                            <div className={css.filVal}>
                                <div className={css.filValItm}>{filweight[0]}</div>
                                <div className={css.filValItm}>{filweight[1]}</div>
                            </div>
                        </div>
                        <div>
                            <Typography id="range-slider" gutterBottom>
                                цена
                            </Typography>
                            <Slider
                                value={filprice}
                                onChange={rangeSelector}
                                valueLabelDisplay="auto"
                                min={0}
                                max={10000}
                            />
                            <div className={css.filVal}>
                                <div className={css.filValItm}> {filprice[0]}</div>
                                <div className={css.filValItm}>{filprice[1]}</div>
                            </div>

                        </div>
                        <div>
                            <button onClick={setValu}
                                    className={css.filBtn}
                            >фильтр
                            </button>
                        </div>
                    </div>
                )
                : null
            }
        </div>
    );
};

export default Filter;