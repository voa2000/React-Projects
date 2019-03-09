import React from 'react';
const CommentDetail = props => {
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="Avatar" src={props.pic} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeago}</span>
                    </div>
                    <div className="text">{props.blog}</div>
                </div>
            </div>
        </div>
    );

};
export default CommentDetail;

