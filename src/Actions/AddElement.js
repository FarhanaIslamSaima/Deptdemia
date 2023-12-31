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
            file:post.file,
            authorId:post.authorId,
            content:post.content

        })

    }
    catch(error){
        return error;
    }
}

export const handleQuery=async(post)=>{
    console.log(post);
    try{
        const colRef=collection(db,'Query');
        addDoc(colRef,{
            option:post.option,
            author:post.author,
            authorId:post.authorId,
            content:post.content,
            file:post.file,
            title:post.title,
            


        })

    }
    catch(error){
        return error;
    }

}
export const querySol=async(post)=>{
    
    try{
        const colRef=collection(db,'QuerySol');
        addDoc(colRef,{
            queryId:post.queryId,
            author:post.author,
            content:post.content,
            file:post.file,
            option:post.option,
            title:post.title
            
        })
     console.log(post);
    }
    catch(error){
        return error;
    }

}