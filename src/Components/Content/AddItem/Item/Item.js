import React, {useEffect, useState} from 'react';
import css from './Item.module.css';
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadAC} from "../../../../Redux/Actions/item.actions";


const Item = ({num, numM, filpriceArr, setFilprice, filweightArr, setFilweight}) => {

    //Redux

    const ItemW = useSelector(state => state.ItemReducer.ItemW)
    const ItemM = useSelector(state => state.ItemReducer.ItemM)
    const nameI = useSelector(state => state.ItemReducer.name)
    const filprice = useSelector(state => state.ItemReducer.price)
    const filweight = useSelector(state => state.ItemReducer.weight)
    const load = useSelector(state => state.ItemReducer.load)
    const dispatch = useDispatch()

    const [stateW, setStateW] = useState(ItemW)


    console.log(filprice, filweight, 'asfssafsafa')

    console.log(ItemW)

    const [searchedAllItemW, setSearchedAllItemW] = useState([]);
    const [searchedAllItemM, setSearchedAllItemM] = useState([]);

    const [filwArr, setFilwArr] = useState([])

    //filter

    // useEffect(()=>{
    //     // if (filpriceArr[0]<num.weight<filpriceArr[1] && filweightArr[0]<num.price<filweightArr[1]){
    //     //     const searchedItemW= num.filter(w =>{
    //     //         return setSearchedAllItemW(w)
    //     //     })
    //     // }
    //     let arr = []
    //     num.forEach(itm => {
    //         (itm.weight > filweight[0] && itm.price > filprice[0] && itm.weight<filweight[1] && itm.price < filprice[1] ) && arr.push(itm)
    //         // (filpriceArr[0]<itm.weight<filpriceArr[1] && filweightArr[0]<itm.price<filweightArr[1]) && arr.push(itm)
    //     })
    //     setSearchedAllItemW(arr)
    // },[filprice[0],filweight[0],filprice[1],filweight[1]])

    console.log(searchedAllItemW)
    //search

    useEffect(() => {
        let searchedItemW = num.filter(i => {
            return i.artikul.toLowerCase().includes(nameI.toLowerCase())
        })
        setSearchedAllItemW(searchedItemW)
    }, [nameI, num])

    useEffect(() => {
        let searchedItemM = numM.filter(i => {
            return i.artikul.toLowerCase().includes(nameI.toLowerCase())
        })
        setSearchedAllItemM(searchedItemM)
    }, [nameI, numM])

    //dragProduct

    const [currentCard, setCurrentCard] = useState(null)

    // plar = () => {
    //     alert("hwllo")
    // }

    function plar() {
        alert("hrllo")
    }

    function dragDragStartHendler(e, w) {
        // console.log("drag", w)
        setCurrentCard(w)
    }

    function dragDragEndHendler(e) {
        e.target.style.background = 'white'
    }

    function dragDragOverHendler(e) {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }

    function dropDragHendler(e, w) {
        e.preventDefault()
        // console.log("drop", w)
        setSearchedAllItemM(searchedAllItemM.map(c => {
            if (c.id === w.id) {
                return {...c, order: currentCard.order}
                console.log(currentCard)
            }
            if (c.id === currentCard.id) {
                return {...c, order: w.order}
                console.log(currentCard)
            }
            return c
        }))
        e.target.style.background = 'white'
    }

    function dragStartHendler(e, w) {
        // console.log("drag", w)
        setCurrentCard(w)
    }

    function dragEndHendler(e) {
        e.target.style.background = 'white'
    }

    function dragOverHendler(e) {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }

    function dropHendler(e, w) {
        e.preventDefault()
        // console.log("drop", w)
        setSearchedAllItemW(searchedAllItemW.map(c => {
            if (c.id === w.id) {
                return {...c, order: currentCard.order}
            }
            if (c.id === currentCard.id) {
                return {...c, order: w.order}
            }
            return c
        }))
        e.target.style.background = 'white'
    }

    const sortCards = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    // const ijk = () => {
    //    let filterKey = 100;
    //     searchedAllItemW.forEach((ele) =>
    //                 ele.ratings.users.filter((newEl) =>
    //                     newEl.id == filterKey))
    //
    //         // {
    //         //     filter(i => {return i.price > parseInt(filweight[0], 10) && i.price < filweight[1]}
    //         // }
    //
    // }

    return (
        <div className={css.itemBox}>
            <Route path={'/wooman'}>
                {
                    searchedAllItemW.sort(sortCards).map(w => {
                        return <div key={w.id} className={css.itemBoy}
                                    onDragStart={(e) => dragStartHendler(e, w)}
                                    onDragLeave={(e) => dragEndHendler(e)}
                                    onDragEnd={(e) => dragEndHendler(e)}
                                    onDragOver={(e) => dragOverHendler(e)}
                                    onDrop={(e) => dropHendler(e, w)}
                                    draggable={true}>
                            <div><img src={w.img} width={'150px'} height={'120px'} alt={'img'}/></div>
                            <div className={css.itemInform}>
                                <div>{w.price} $</div>
                                <div>{w.artikul}</div>
                            </div>
                        </div>
                    })}
            </Route>
            {/*{searchedAllItemM*/}
            {/*    .filter((hotel) => {*/}
            {/*        return hotel.price > parseInt(filweight[0], 10) && hotel.price > parseInt(filweight[1], 10);*/}
            {/*    })*/}
            {/*    .map((hotel) => {*/}
            {/*        return (*/}
            {/*            <p key={hotel.name}>*/}
            {/*                {hotel.name} | {hotel.price} &euro;{" "}*/}
            {/*            </p>*/}
            {/*        );*/}
            {/*        plar();*/}
            {/*    })}*/}
            {/*{plar()}*/}
            <Route path={'/man'}>
                {searchedAllItemM.sort(sortCards).map(w => {
                    return <div key={w.id} className={css.itemBoy}
                                onDragStart={(e) => dragDragStartHendler(e, w)}
                                onDragLeave={(e) => dragDragEndHendler(e)}
                                onDragEnd={(e) => dragDragEndHendler(e)}
                                onDragOver={(e) => dragDragOverHendler(e)}
                                onDrop={(e) => dropDragHendler(e, w)}
                                draggable={true}>
                        <div><img src={w.img} width={'150px'} height={'120px'} alt={'img'}/></div>
                        <div className={css.itemInform}>
                            <div>{w.price} $</div>
                            <div> {w.artikul}</div>
                        </div>
                    </div>
                })}
            </Route>
        </div>
)
};

export default Item;