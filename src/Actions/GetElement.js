import { db } from "../firebase";

import { collection,ref,query,where, onSnapshot } from "firebase/firestore";

export const getElement=async(subject)=>{
    const colref=collection(db,'Contribution');
    let book =[];

    const q=query(colref,where("option","==",subject));
    
    onSnapshot(q,(snapshot)=>{
        snapshot.docs.forEach((doc)=>{
            book.push({...doc.data(),id:doc.id});
        })
        console.log(book);
    })

    return book;


}