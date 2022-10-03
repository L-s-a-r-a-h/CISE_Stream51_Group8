import React, {useEffect, useState} from "react";
import axios from "axios";
//import ArticleCard from "./ArticleCard"
import ArticleCard from "./ArticleItem";
//import ArticleCard from "./ArticleItem";

import {Link,Route,Routes} from "react-router-dom";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        let subscribe = true;
        axios.get('http://localhost:5000/all-articles')
            .then(({data}) => {
                if (subscribe) {
                    setArticles(() => data);
                }
            })
            .catch(err => {
                alert(err);
            });
        return () => {
            subscribe = false;
        }
    });

    const ArticleItemData = () => {
        return articles.map((res, i) => {
            return <ArticleCard object={res} key={i}/>;
        })
    };

    const OpenSummary = () => {

    }

    return (
        <>
            <div className="ShowArticleList">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <br/>
                            <h2 className="display-4 text-center">Articles list</h2>
                        </div>
                    </div>

                    <div className="list">
                        {ArticleItemData()}

                    </div>

 
            </div>
        </>
    )
}
export default ArticleList;