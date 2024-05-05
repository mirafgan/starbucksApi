const fetchData = async (url) => {
    const request = await fetch(url);
    const response = await request.json();
    return response
}
module.exports = { fetchData }