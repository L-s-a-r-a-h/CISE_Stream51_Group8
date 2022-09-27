import React from "react";

const ModerationList = () => {

    const [articles, setArticle] = useState([]);
    useEffect(() => {
        let subscribe = true;
        axios.get('http://localhost:8082/all-books')
            .then(({data}) => {
                if (subscribe) {
                    setArticle(() => data);
                }
            })
            .catch(err => {
                alert(err);
            });
        return () => {
            subscribe = false;
        }
    });

}


<div>
<h2>Moderate Article</h2>
    <p>Moderators only. Accept or reject article requests</p>
<SubmissionForm/>
</div>

export default ModerationList;