import React from "react";
import SubmissionForm from "../components/SubmissionForm.js"; 

const SubmitArticle = () =>  {
     return (
      <div>
        <h2>Submit Article</h2>
            <p>Request for an article to be added to the database. All submissions will be moderated.</p>
<SubmissionForm/>
        </div>
    );
}
 
export default SubmitArticle;