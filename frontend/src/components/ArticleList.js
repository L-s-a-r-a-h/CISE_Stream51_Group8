import React, {useEffect, useState} from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard"

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [searchFilter, setSearchFilter] = useState([]);
    const [result, setResult] = useState("");
    useEffect(() => {
        let subscribe = true;
        axios.get('http://localhost:5000/all-articles')
            .then(({data}) => {
                if (subscribe) {
                    setArticles(() => data);
                }
            })
            .then((articles) => setSearchFilter(articles))
            .catch(err => {
                alert(err);
            });
        return () => {
            subscribe = false;
        }
    });

    useEffect(() =>{
        const results = searchFilter.filter(res =>
           res.title.toLowerCase().includes(result)
        );
        setArticles(results)
      },[result])

    // const ArticleItemData = () => {
    //     return articles.map((res, i) => {
    //         return <ArticleCard object={res} key={i}/>;
    //     })
    // };

    const onChange = (evt) => {
        setResult(evt.target.value);
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
                            placeholder="Search for an article test..."
                            value={result}
                            onChange={onChange}
                    />

                    <div className="list">
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