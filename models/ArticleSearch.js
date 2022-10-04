import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';

class ArticleSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/articles')
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ArticleSearch');
      })
  };


  render() {
    const articles = this.state.articles;
    console.log("PrintArticle: " + articles);
    let articleList;

    if(!books) {
      articleList = "No articles found";
    } else {
      articleList = articles.map((article, k) =>
        <ArticleCard article={article} key={k} />
      );
    }

    return (
      <div className="ArticleSearch">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Article List</h2>
            </div>

            {/* <div className="col-md-11">
              <Link to="/create-articles" className="btn btn-outline-warning float-right">
                + Add New Artcle
              </Link>
              <br />
              <br />
              <hr />
            </div> */}

          </div>

          <div className="list">
                {articleList}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleSearch;