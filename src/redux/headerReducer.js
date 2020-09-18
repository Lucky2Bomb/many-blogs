let initialstate = {
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

const headerReducer = (state = initialstate, action) => {
    return state;
}

export default headerReducer;