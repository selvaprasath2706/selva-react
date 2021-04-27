import React,{useState,useEffect} from "react";
import firebase from "firebase/app";
import "../../pages/firebase";
import Notes from "./Notes";
import NotesLoader from "./NotesLoader";

export default function GetNote(){
    const Loader=NotesLoader(Notes);

    const [state,setState]=useState({
        isLoaded:false,
        notes:null,
    });
    const notes=[];
    useEffect(() => {
        var db = firebase.firestore();
    db.collection("notes")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const docdata={
          id:doc.id,
          created:doc.data().created,
          note:doc.data().note,
        };
        notes.push(docdata);
    });
    setState({isLoaded:true,notes:notes})
  });
    }, [setState]);
    return(
        <div className="container mt-5">
            <Loader isLoaded={state.isLoaded} notes={state.notes}></Loader>
        </div>
    );
}