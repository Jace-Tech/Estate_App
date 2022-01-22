export const fetchData = async (url) => {
    const request = await fetch(`https://bayut.p.rapidapi.com/${url}`, { headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'bf020f200bmsh50fa8212f21d58ap1be095jsn1d8e8333f75a'
    } })
    const response = await request.json();

    return response
} 

