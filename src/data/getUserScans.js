const getUserScans = async (current) => {

    return fetch('https://trackyourtour.firebaseio.com/scans/'+current+'.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(r => r.json())
        .then(data => {return data});
};

export default getUserScans;
