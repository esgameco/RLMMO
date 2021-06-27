class APIHelper {
    // GET api/cats
    async getCats() {
        return await axios.get('/api/cats', {withCredentials: true});
    }
}

export default new APIHelper();