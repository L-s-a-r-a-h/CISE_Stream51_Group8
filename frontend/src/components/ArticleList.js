import React, {useEffect, useState} from "react";
import axios from "axios";
import ArticleItem from "./ArticleItem";

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
            return <ArticleItem object={res} key={i}/>;
        })
    };

    return (
        <div className="ShowBookList">
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
    )
}
export default ArticleList;