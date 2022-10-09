//import { articles } from "../../../routes/api/articles.js";
/*import React, {useEffect, useState} from "react";
import axios from "axios";
// import BookCard from "./BookCard";
import ArticlesCard from "./ArticleCard"
// import router from "../../../routes/api/articles.js";


//show article details

const ArticleSummary = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
      let subscribe = true;
        axios.get('http://localhost:5000/articlesummary/:id' )
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

*/

import {useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ArticleItem from "./ArticleItem";


const ArticleSummary= () => {

    const {id} = useParams();

    let navigate = useNavigate();
    const [data, setData] = useState('');
    try {
        
        const response = axios.get('http://localhost:5000/articlesummary/'+ id)
        .then((response) => {
           
           // alert(response.data);
            setData(response.data);
            })
      
    }catch(err)
    {
         alert(err);
    };
    return (
        <>

            <div className="ShowArticleList">
                    <div className="row">
                        <div className="col-md-12">
                        
                            <h2 className="display-4 text-center">Article Summary</h2>
                            <h5>details and summary of the article</h5>
                            <h>article id is {id}</h>
                         
                        </div>
                    </div>

           

 
            </div>
        </>
    )

   /*     const [ article, setArticle] = useState({
        id: "",
        title: "",
        authors: "",
        author: "",
        source: "",
        doi: "",
        pubyear: "",
        claim: "",
        evidence:""
    
    });

    useEffect(() => {
        axios.get('http://localhost:5000/articlesummary/' + id)
          .then(res => {
                const {id,title, authors, source, pubyear, doi,claim,evidence} = res.data;
                setArticle({
                    id:id,
                    title: title,
                    authors: authors,
                    source: source,
                    doi: doi,
                    pubyear: pubyear,
                    claim: claim,
                    evidence:evidence
                });
            })

            .catch(err => alert(err));
                }, []);  */
         

            



 




}

export default ArticleSummary;