class APIHelper {
    // GET api/cats
    async getCats() {
        const res = await this._get('/api/cats')
        return res.data.cats;
    }

    // POST api/plustwo
    async postPlusTwo(num) {
        const res = await this._post('/api/plustwo', {num})
        return res.data.num;
    }

    async _get(uri) {
        return await axios.get(uri, {withCredentials: true});
    }

    async _post(uri, data) {
        return await axios.post(uri, data, {withCredentials: true});
    }
}

export default new APIHelper();