const mongoose = require('mongoose');
const tradingDb = mongoose.model('SetSchema');
const axios = require('axios');
require('dotenv').config();
const url = process.env.URL_PIPEDRIVE + process.env.TOKEN_PIPEDRIVE;

module.exports = {

    async clientsWons() {
        const response = await axios.get(url);
        return response.data;
    },

    async filterCreate() {
        try {
            const data = await this.clientsWons();
            const response = data.data
            let sendCreate = []
            const tradingData = await tradingDb.find();

            response.forEach(item => {
                const result = tradingData.find(trading => trading.title === item.title)
                if (!result) {
                    sendCreate.push(item)
                }
            });
            return sendCreate
        } catch (error) {
            return error
        }
    },
};