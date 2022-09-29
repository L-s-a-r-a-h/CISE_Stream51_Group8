/*import { articles } from "../../../routes/api/articles.js";
import React, {useEffect, useState} from "react";
import axios from "axios";
// import BookCard from "./BookCard";
//import ArticlesCard from "./ArticleCard"
import ArticleItem from "./ArticleItem";
// import router from "../../../routes/api/articles.js";


const ArticleSummary = () => {
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
//<div className="ShowArticlesList">
  //const ArticlesCardData = () => {
    const ArticleItemData = () => {
      return articles.map((res, i) => {
          return <ArticleItem object={res} key={i}/>;
      })
  };

  return (
      <>
          
          <div className="ShowBookList">
                  <div className="row">
                      <div className="col-md-12">
                          <br/>
                          <h2 className="display-4 text-center">Articles Summary</h2>
                      </div>
                  </div>

                  <div className="list">
                  {ArticleItemData()}
                  </div>
          </div>
      </>
  )
}

export default ArticleSummary;*/

import React, {useEffect, useState} from "react";
import axios from "axios";
import ArticleItem from "./ArticleItem";

const ArticleSummary = () => {
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
        <>
            <div className="ShowBookList">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <br/>
                            <h2 className="display-4 text-center">Article Summary</h2>
                        </div>
                    </div>

                    <div className="list">
                        {ArticleItemData()}
                    </div>
            </div>
        </>
    )
}
export default ArticleSummary;