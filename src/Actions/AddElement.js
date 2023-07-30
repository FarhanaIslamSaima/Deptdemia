import { db } from "../firebase";
import { addDoc,collection } from "firebase/firestore";
export const handleElement=(post)=>{
    const ref=collection(db,'Contribution');

    try{
        addDoc(ref,{
            title:post.title,
            category:post.category,
            author:post.author,
            file:post.file

        })

    }
    catch(error){
        return error;
    }
}