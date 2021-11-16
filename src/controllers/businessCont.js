const mongoose = require('mongoose');
const businessContDb = mongoose.model('setSchema');
const axios = require('axios');
require('dotenv').config();
const url = process.env.URL_PIPEDRIVE;

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
            const businessController = await businessContDb.find();

            response.forEach(item => {
                const result = businessController.find(business => business.title === item.title)
                if (!result) {
                    sendCreate.push(item)
                }
            });
            return sendCreate;
        } catch (error) {
            return error
        };
    },
};