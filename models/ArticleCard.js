import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ArticleCard = (props) => {
    const  article  = props.articles;

    return(
        <div className="card-container">
            <img src="https://us.123rf.com/450wm/dxinerz/dxinerz1801/dxinerz180101017/92772340-article-page-document-data-icon-image-can-also-be-used-for-seo-digital-marketing-technology-suitable.jpg?ver=6" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-artcile/${article._id}`}>
                        { article.title }
                    </Link>
                </h2>
                <h3>{article.author}</h3>
                <p>{article.description}</p>
            </div>
        </div>
    )
};

export default ArticleCard;