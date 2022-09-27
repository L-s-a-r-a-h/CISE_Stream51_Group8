import { articles } from "../../../routes/api/articles.js";
import Styles from "./tablestyle.js";
import Table from "./evidencetable.js";
import tablecolumns from "./tablecolumns.js";
import Dropdown from "./Dropdown.js";


const ArticleSummary = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
            <Dropdown/>
            <Styles>
              <Table
              data={articles.get()}
              columns={tablecolumns}
              />
          </Styles>
      </div>
    );
}
 
export default ArticleSummary;