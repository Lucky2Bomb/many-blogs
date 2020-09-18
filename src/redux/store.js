import profileReducer from "./profileReducer";
import headerReducer from "./headerReducer";

const store = {
    _state: {
        profile: {
            posts: [
                // {
                //     text: 'post 1 rgregergerfgwefwe'
                // },
                // {
                //     text: 'post 2 WFEWRGFwf'
                // },
                // {
                //     text: 'post 3 EFWEFWEF234FW'
                // }
            ],
            newPostTextarea: ''
        },
        header: {
            navbar: {
                links: [
                    {
                        link: '/profile',
                        name: 'профиль'
                    },
                    {
                        link: '/main',
                        name: 'главная'
                    },
                    {
                        link: '/register',
                        name: 'создать блог'
                    },
                    {
                        link: '/login',
                        name: 'войти'
                    }
                ]
            }
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        //let text = newPostElement.current.value;
        let newPost = {
            text: this._state.profile.newPostTextarea
        };
        this._state.profile.posts.push(newPost);
        this._state.profile.newPostTextarea = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newPostText) {
        this._state.profile.newPostTextarea = newPostText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.header = headerReducer(this._state.header, action);
        this._callSubscriber(this._state);
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         text: this._state.profile.newPostTextarea
        //     };
        //     this._state.profile.posts.push(newPost);
        //     this._state.profile.newPostTextarea = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profile.newPostTextarea = action.newPostText;
        //     this._callSubscriber(this._state);
        // }
    }
}

export default store;