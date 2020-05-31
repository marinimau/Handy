const getUserData = async (current) => {

    return fetch('https://trackyourtour.firebaseio.com/users/'+current+'.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(r => r.json())
        .then(data => {return data});
};

export default getUserData;
