import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import ArticleCard from "./ArticleCard";


const SearchArticle = () => {
    const {keyword} = useParams();
    const [recommendedArticle, setRecommendedArticles] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/search/" + keyword)
            .then(({data}) => {
                setRecommendedArticles(() => data)
            })
            .catch((err) => {
                alert(err);
            })
    }, []);

    const ArticleCardData = () => {
        if (recommendedArticle.length > 0) {
            return recommendedArticle.map((res, i) => {
                return <ArticleCard object={res} key={i}/>;
            })
        } else {
            return <h5 style={{display: "center"}}>no articles found</h5>
        }
    };

    return (
        <>
            <div className="ShowArticleList">
                <div className="row">
                    <div className="col-md-12">
                        <br/>
                        <h2 className="display-4 text-center">Articles</h2>
                    </div>
                </div>

                <div className="list">
                    {ArticleCardData()}
                </div>
            </div>
        </>
    )
}

export default SearchArticle;