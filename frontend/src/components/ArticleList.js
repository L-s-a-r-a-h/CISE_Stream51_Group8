import React, {useEffect, useState} from "react";
import axios from "axios";
//import ArticleCard from "./ArticleCard"
import ArticleCard from "./ArticleItem";
//import ArticleCard from "./ArticleItem";

import {Link,Route,Routes} from "react-router-dom";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
 //  const [searchFilter, setSearchFilter] = useState([]);
  const [result, setResult] = useState([]);
    useEffect(() => {
        let subscribe = true;
        axios.get('http://localhost:5000/all-articles')
            .then(({data}) => {
                if (subscribe) {
                    setArticles(() => data);
                }
            })

        return () => {
            subscribe = false;
        }
    });


     const ArticleItemData = () => {
         return articles.map((res, i) => {
             return <ArticleCard object={res} key={i}/>;
         })
     };

    /* useEffect(() =>{
        const results = searchFilter.filter(res =>
           res.title.toLowerCase().includes(result)
        );
        setArticles(results)
      },[result])

    const onChange = (evt) => {
        setResult(evt.target.value);
        } */

    const OpenSummary = () => {

    }

    return (
        <>
            <div className="ShowArticleList">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <br/>
                            <h2 className="display-4 text-center">Articles List</h2>
                        </div>
                    </div>

                    <input
                            type="text"
                            placeholder="Search for an article"
                            value={result}
                            //onChange={e => setKeyword(e.target.value)}
                    />

                    <div className="list">

                        {ArticleItemData()}


                        {articles.map((res,i) => {
                            <ArticleCard object={res} key={i}/>
                        }

                        )
                    }
                    </div>

 
            </div>
        </>
    )
}
export default ArticleList;