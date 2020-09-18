const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialstate = {
    posts: [
        {
            text: 'post 1 rgregergerfgwefwe'
        },
        {
            text: 'post 2 WFEWRGFwf'
        },
        {
            text: 'post 3 EFWEFWEF234FW'
        }
    ],
    newPostTextarea: 'test text',
}

const profileReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                text: state.newPostTextarea
            };
            state.posts.push(newPost);
            state.newPostTextarea = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostTextarea = action.newPostText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });

export default profileReducer;