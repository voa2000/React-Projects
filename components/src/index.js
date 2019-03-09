import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Viv" timeago="Today at 12:45AM" blog="Nice dress" pic={faker.image.avatar()} />
            <CommentDetail author="Sam" timeago="Yesterday at 12:00AM" blog="Great picture" pic={faker.image.avatar()} />
            <CommentDetail author="Ben" timeago="Today at 7:15PM" blog="Nice suit" pic={faker.image.avatar()} />
        </div>
    )
};
ReactDOM.render(<App />, document.querySelector('#root'))
