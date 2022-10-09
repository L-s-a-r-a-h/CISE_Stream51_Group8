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

       
    return (
        <>

            <div className="article article-container"  >
                <div className="article-body">
                <h4 className="article-id">ID: {id}</h4>
                    <h4 className="article-title">Title: {title}</h4>
                    
                    <h5 className="article-text">DOI: {doi}</h5>
                    <h5 className="article-text">Authors: {authors}</h5>
                    <p className="article-text">Source: {source}</p>
                    <p className="article-text">Published year: {pubyear}</p>
                    <p className="article-text">Name: {name}</p>
                    <p className="article-text">Email: {email}</p>
                   
                </div>
            </div>
        </>
    );
}
export default SubmissionItem;