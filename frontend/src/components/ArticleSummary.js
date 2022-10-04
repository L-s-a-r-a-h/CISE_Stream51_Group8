//import { articles } from "../../../routes/api/articles.js";
import React, {useEffect, useState} from "react";
import axios from "axios";
// import BookCard from "./BookCard";
import ArticlesCard from "./ArticleCard"
// import router from "../../../routes/api/articles.js";


//show article details
const ArticleSummary = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
      let subscribe = true;
        axios.get('http://localhost:5000/summary' )
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

  const ArticlesCardData = () => {
      return articles.map((res, i) => {
          return <ArticlesCard object={res} key={i}/>;
      })
  };

  return (
      <>
          <div className="ShowArticlesList">
                  <div className="row">
                      <div className="col-md-12">
                          <br/>
                          <h2 className="display-4 text-center">Articles Summary</h2>
                      </div>
                  </div>

                  <div className="list">
                      {ArticlesCardData()}
                  </div>
          </div>
      </>
  )
}

export default ArticleSummary;

