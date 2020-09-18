import React from 'react';
import '../../../Sass/style.scss';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const Posts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost(newPostElement.current.value);
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        // props.updateNewPostText(newPostElement.current.value);
        props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
    }

    const PostList = props.posts.map(item => (<Post text={item.text} />)).reverse();
    return (
        <div className="posts">
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostTextarea} />
            </div>
            <div>
                <button onClick={addPost}>Опубликовать</button>
            </div>
            {PostList}
        </div>
    );
}

export default Posts;