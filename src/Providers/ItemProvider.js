import React, {createContext, useContext, useState} from "react";
import ring from "../Svg/ring.jpg"

const SkillsContext = createContext({})

const ItemProvider = ({children}) => {

    const [item,setItem] = useState([
        {id:Math.random(),name: 'Ring',price:'800$',weight:'200',cart:'1641',img:<img src={ring} width={'180px'} height={'80px'}/>},
        {id:Math.random(),name: 'Ring',price:'500$',weight:'200',cart:'1641',img:<img src={ring} width={'180px'} height={'80px'}/>},
        {id:Math.random(),name: 'Ring',price:'700$',weight:'200',cart:'1641',img:<img src={ring} width={'180px'} height={'80px'}/>},
    ])

    const addSkills = (newitem) => {
        setItem([...item, newitem])
    }

    const editItem = (id, name) => {
        item.forEach(newitem => {
            if(item.id === id){
                item.name = name
            }
        })
    }



    return <SkillsContext.Provider
        value={{item,setItem,addSkills, editItem}}>
        {children}
    </SkillsContext.Provider>
}

const useItem = () => {
    return useContext(SkillsContext)
}

export {ItemProvider, useItem}