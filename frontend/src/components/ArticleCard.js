import React from "react";
import {Link} from "react-router-dom";
//import {} from "react-bootstrap";
// import axios from "axios";

const ArticleCard = (props) => {
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

    // const deleteBook = () => {
    //     axios.delete('http://localhost:8082/delete/' + id)
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 alert("Book was deleted")
    //                 window.location.reload();
    //             } else {
    //                 Promise.reject();
    //             }
    //         })
    //         .catch(err => alert(err));
    // }
    return (
        <>

            <div className="card card-container"  >
              
                <div className="card-body">
                <h4 className="card-id">ID: {id}</h4>
                    <h4 className="card-title">Title: {title}</h4>
                    
                    <h5 className="card-text">DOI: {doi}</h5>
                    <h5 className="card-text">Authors: {authors}</h5>

                    <p className="card-text">Published year: {pubyear}</p>
                    <p className="card-text">Source: {source}</p>

                    <p className="card-text">Claim: {claim}</p>
                    <p className="card-text">Evidence: {evidence}</p>
                    {/*<Link className="edit-link" to={"/update/" + id}>Update</Link>
                     <Button onClick={deleteBook} size="sm" variant="danger">Delete</Button> */}
                </div>
            </div>
        </>
    );
}
export default ArticleCard;