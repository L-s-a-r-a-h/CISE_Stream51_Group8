import React, {useEffect, useState} from "react";
import axios from "axios";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
// import Dropdown from "../components/Dropdown.js";
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
        // <div className="ShowBookList">
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <br/>
        //                 <br/>
        //                 <h2 className="display-4 text-center">Articles list</h2>
        //             </div>
        //         </div>

        //         <div className="list">
        //             {ArticleItemData()}
        //         </div>
        // </div>
        <div>
        <h2>Article Summary</h2>
            {/* <Dropdown/> */}
            <Styles>
              <Table
              data={articles}
              columns={tablecolumns}
              />
          </Styles>
      </div>
    )
}
export default ArticleList;