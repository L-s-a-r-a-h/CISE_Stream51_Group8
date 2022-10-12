import React from "react";

// data entered into submission form
const SubmissionItem = (props) => {
    const {id,title, authors, source, pubyear, doi,name,email} =
        {
            id: props.object.id,
            title: props.object.title,
            authors: props.object.authors,
            source: props.object.source,
            doi: props.object.doi,
            pubyear: props.object.pubyear,
            name: props.object.name,
            email: props.object.email

        };

        function acceptSubmission()
        {
alert("accepted");

        }

        function rejectSubmission()
        {
alert("rejected");
        }
       
    return (
        <>

            <div className="article article-container"  >
                <div className="article-body">
                <h4 className="article-id">submission ID: {id}</h4>
                    <h4 className="article-title">Title: {title}</h4>
                    <p className="article-text">DOI: {doi}</p>
                    <p className="article-text">Authors: {authors}</p>
                    <p className="article-text">Source: {source}</p>
                    <p className="article-text">Published year: {pubyear}</p>
                    <p className="article-text">Submitter details</p>
                    <p className="article-text">Name: {name}</p>
                    <p className="article-text">Email: {email}</p>
                   
                   <button className = "Accept-Button"  onClick={acceptSubmission}> Accept</button>

                   <button className = "Reject-Button" onClick={rejectSubmission}> Reject</button>

                </div>
            </div>
        </>
    );
}
export default SubmissionItem;