import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <div>
                <h4>Warning</h4>
            Are you sure you want to add this?
            </div>
                <CommentDetail
                    author={faker.name.firstName()}
                    timeago="Yesterday at 12:00AM"
                    blog="Nice dress"
                    pic={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <div>
                <h4>Warning</h4>
            Are you sure you want to add this?
            
            </div>
                <CommentDetail
                    author={faker.name.firstName()}
                    timeago="Yesterday at 12:00AM"
                    blog="Great picture"
                    pic={faker.image.people()} />
            </ApprovalCard>
            <ApprovalCard>
            <div>
                <h4>Warning</h4>
            Are you sure you want to add this?
            </div>
                <CommentDetail
                    author={faker.name.firstName()}
                    timeago="Today at 7:15PM"
                    blog="Nice suit"
                    pic={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )
};
ReactDOM.render(<App />, document.querySelector('#root'))