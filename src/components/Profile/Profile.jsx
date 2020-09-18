import React, { useEffect, useState } from 'react';
import "../../Sass/style.scss";
import Posts from './Posts/Posts';

const Profile = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://localhost:3001/profile")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.items);
                },
                // Примечание: Обрабатывать ошибки необходимо именно здесь
                // вместо блока catch(), чтобы не пропустить
                // исключения из реальных ошибок в компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return (
            <div> Вы не авторизовались...
                <br /> 
                {error.toString()}
            </div>
        );
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
                <div className="profile">
                    profile
                {items}
                    {/* <Posts
                    posts={props.state.posts}
                    newPostTextarea={props.state.newPostTextarea}
                    dispatch={props.dispatch}
                /> */}
                </div>
        );
    }

    // return (
    //     <div className="profile">
                    //         profile
    //         <Posts
    //         posts={props.state.posts} 
    //         newPostTextarea={props.state.newPostTextarea}
    //         dispatch={props.dispatch}
    //         />
    //     </div>
    // );
}

export default Profile;