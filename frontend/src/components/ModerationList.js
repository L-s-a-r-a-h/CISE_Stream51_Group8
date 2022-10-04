import React, {useEffect, useState} from "react";
import axios from "axios";
import SubmissionForm from "./SubmissionForm";
import SubmissionItem from "./SubmissionItem";
const ModerationList = () => {

    const [articleRequests, setArticleRequest] = useState([]);
    useEffect(() => {
        let subscribe = true;
        axios.get('http://localhost:5000/all-articleRequests')
            .then(({data}) => {
                if (subscribe) {
                    setArticleRequest(() => data);
                }
            })
            .catch(err => {
                alert(err);
            });
        return () => {
            subscribe = false;
        }
    });

    const SubmissionItemData = () => {
        return articleRequests.map((res, i) => {
            return <SubmissionItem object={res} key={i}/>;
        })
    };

    <div className="list">
    {SubmissionItemData()}
</div>

return (
    <>
        <div className="ShowArticleList">
                <div className="row">
                    <div className="col-md-12">
                        <br/>
                        <br/>
                        <h2 className="display-4 text-center"> Articles submission list</h2>
                        <p>Moderators only. Accept or reject article requests</p>

                    </div>
    


</div>
                <div className="list">
                    {SubmissionItemData()}
                </div>
        </div>
    </>
)
}


export default ModerationList;