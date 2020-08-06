import React from 'react';
import PostListItem from '../post-list-item/';
import './post-list.js';

const PostList = ({posts}) => {
    let elements = posts.map((element) => {
        if(typeof element === 'object' && isEmpty(element)){
            return(
                <li className="list-group-item">
                    <PostListItem 
                        label={element.label} 
                        important={element.important} 
                    />
                </li>
            )
        }
    });

    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;