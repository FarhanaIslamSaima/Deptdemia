import { db } from "../firebase";

import { collection,ref,query,where, onSnapshot } from "firebase/firestore";

export const getElement=(id)=>{
    const colref=collection(db,'Contribution');
    let book =[];

    const q=query(colref,where("option","==",id));
    console.log(id);
    onSnapshot(q,(snapshot)=>{
        snapshot.docs.forEach((doc)=>{
            book.push({...doc.data(),id:doc.id});
        })
        console.log(book);
    })

    return book;


}