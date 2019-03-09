import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail>
                author={faker.name.firstName()}
                timeago="Yesterday at 12:00AM"
                blog="Nice dress"
                pic={faker.image.avatar()} >
                </CommentDetail>
                </ApprovalCard>
            <CommentDetail
                author={faker.name.firstName()}
                timeago="Yesterday at 12:00AM"
                blog="Great picture"
                pic={faker.image.people()} />
            <CommentDetail
                author={faker.name.firstName()}
                timeago="Today at 7:15PM"
                blog="Nice suit"
                pic={faker.image.avatar()} />
        </div>
    )
};
ReactDOM.render(<App />, document.querySelector('#root'))