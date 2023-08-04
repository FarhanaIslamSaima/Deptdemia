import { getAuth } from "firebase/auth";
import { db } from "../firebase";

import { collection,ref,query,where, onSnapshot, getDocs } from "firebase/firestore";

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
export const getAllQuery=async()=>{
    try{
        let res=[];
        const ref=collection(db,'Query');
        const docs_ref=await getDocs(ref);
        docs_ref.forEach(query=>{
            res.push({
                id:query.id,
                ...query.data()
            })

        })
        return res;


    }
    catch(error){
        return error;
    }

}

// export const getUserQuery=async()=>{
//     try{
       
    
//         return res;

//     }
//     catch(error){
//         return error;
//     }

// }