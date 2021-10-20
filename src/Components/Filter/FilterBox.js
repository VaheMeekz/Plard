import React, {useState} from 'react';
import css from './Filter.module.css'
import Filter from "./Filter";
import fil from './../../assets/images/filter.svg'

const FilterBox = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    return (
        <div className={css.filterBoxBody}>
            <div className={css.filterBoxBodyB}>
                <div onClick={openModal} className={css.filterBoxName}>
                        <div> <img src={fil}/></div>
                        <div><p>ф </p></div>
                        <div><p>и</p></div>
                        <div><p>л</p></div>
                        <div><p>ь</p></div>
                        <div><p>т</p></div>
                        <div><p>р</p></div>
                </div>
                <Filter showModal={showModal} setShowModal={setShowModal}/>
            </div>

        </div>
    );
};

export default FilterBox;