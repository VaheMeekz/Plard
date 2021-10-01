// import React, {useState} from 'react';
// import {useItem} from "../../Providers/ItemProvider";
//
// const Edit = () => {
//
//     const {item, setItem} = useItem()
//     const [editSkills,deleteSkills] = useState({})
//     const [showEdit, setShowEdit] = useState({})
//
//     const [newSkill, setNewSkill] = useState('')
//     const [editValue, setEditValue] = useState({})
//
//     return (
//         <div>
//             {showEdit[id]
//                 ? <input
//                     value={editValue[id]}
//                     onChange={e => setEditValue({[id]: e.target.value})}
//                     type="text"
//                 />
//                 : <span>{name}</span>}
//             <button
//                       onClick={showEdit[id]
//                     ? () => {
//                         editSkills(id, editValue[id])
//                         setShowEdit({})
//                     }
//                     : () => {
//                         setShowEdit({[id]: true})
//                         setEditValue({[id]: name})
//                     }}
//             >
//                 {showEdit[id] ? "Save" : "Edit"}
//             </button>
//         </div>
//     );
// };
//
// export default Edit;