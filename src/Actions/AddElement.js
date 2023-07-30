import { db } from "../firebase";
import { addDoc,collection } from "firebase/firestore";
export const handleElement=(post)=>{
    const ref=collection(db,'Contribution');
  console.log(post);
    try{
        addDoc(ref,{
            option:post.option,
            author:post.author,
            title:post.title,
            file:post.file

        })

    }
    catch(error){
        return error;
    }
}