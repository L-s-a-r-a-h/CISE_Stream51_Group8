import React from "react";
import axios from "axios";

import SubmissionForm from "../components/SubmissionForm.js"; 

const SubmitArticle = () =>  {
    const addArticle = (data) => {
        axios.post('http://localhost:5000/SubmitArticle', data)
            .then(res => {
                if(res.status === 200){
                    window.alert("Article requested");
                }else{
                    window.alert("Cannot request");
                }
            })
            .catch(err => {
                window.alert(err);
            })
    };


     return (
      <div>
        <br/>
        <br/>
        <h2>Submit Article</h2>
            <p>Request for an article to be added to the database. All submissions will be moderated.</p>

            <React.Fragment>
                <SubmissionForm handleOnSubmit={addArticle}> Request Article </SubmissionForm>
            </React.Fragment>

        </div>




    );
}
 
export default SubmitArticle;