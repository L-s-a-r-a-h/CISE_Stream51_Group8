import React from "react";
import {Link} from "react-router-dom";
//import {} from "react-bootstrap";
// import axios from "axios";

const BookCard = (props) => {
    const {id,title, isbn, author,  description, published_date, publisher,} =
        {
            id: props.object._id,
            title: props.object.title,
            //isbn: props.object.isbn,
            authors: props.object.authors,
            published_year: props.object.published_year,
            doi: props.object.doi,
            source:props.object.source,
            claim: props.object.claim,
            publisher: props.object.publisher
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
                    <h4 className="card-title">Title: {title}</h4>
                    <h5 className="card-text">ISBN: {isbn}</h5>
                    <h5 className="card-text">Author: {author}</h5>
                    <p className="card-text">Description: {description}</p>
                    <p className="card-text">Published date: {published_date}</p>
                    <p className="card-text">Publisher: {publisher}</p>
                    <Link className="edit-link" to={"/update/" + id}>Update</Link>
                    {/* <Button onClick={deleteBook} size="sm" variant="danger">Delete</Button> */}
                </div>
            </div>
        </>
    );
}
export default BookCard;