import React from 'react';
import "../../../../Sass/style.scss";

const Post = (props) => {
    return (
        <div className="post">
            {props.text}
        </div>
    );
}

export default Post;