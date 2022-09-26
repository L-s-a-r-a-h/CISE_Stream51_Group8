import { articles } from "../../../routes/api/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";

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