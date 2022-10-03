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

            <div className="card card-container"  >
                <div className="card-body">
                <h4 className="card-id">ID: {id}</h4>
                    <h4 className="card-title">Title: {title}</h4>
                    
                    <h5 className="card-text">DOI: {doi}</h5>
                    <h5 className="card-text">Authors: {authors}</h5>
                    <p className="card-text">Source: {source}</p>
                    <p className="card-text">Published year: {pubyear}</p>
                    <p className="card-text">Name: {name}</p>
                    <p className="card-text">Email: {email}</p>
                   
                </div>
            </div>
        </>
    );
}
export default SubmissionItem;