import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import axios from "axios";

//Copy of as Article Card, used for testing edits of articlecard



const ArticleItem = (props) => {
    const {id,title, authors, source, pubyear, doi,claim,evidence} =
        {
            id: props.object.id,
            title: props.object.title,
            authors: props.object.authors,
            source: props.object.source,
            doi: props.object.doi,
            pubyear: props.object.pubyear,
            claim: props.object.claim,
            evidence: props.object.evidence

        };

       
    const OpenSummary = () => {
        axios.get('http://localhost:5000/get/' + id)
            .then((res) => {
               
            })
            .catch(err => alert(err));
    }
    return (
        <>

            <div className="card card-container"  >
                <div className="card-body">
                <h4 className="card-id">ID: {id}</h4>
                    <h4 className="card-title">Title: {title}</h4>
                    
                    <h5 className="card-text">DOI: {doi}</h5>
                    <h5 className="card-text">Authors: {authors}</h5>
                    <p className="card-text">Published year: {pubyear}</p>
                    <p className="card-text">Claim: {claim}</p>
                    <p className="card-text">Evidence: {evidence}</p>
                    <Link className="edit-link" to={"/summary/" + id}>Open</Link>
                   
                </div>
            </div>
        </>
    );
}
export default ArticleItem;
