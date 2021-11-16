const axios = require('axios');
const { cnpj } = require('cpf-cnpj-validator');
const Parser = require('xml2js');
require('dotenv').config();
const business = require('./business')
const businessObject = new business();

module.exports = {
    async sendBling(data) {
        try {
            let xmlObj;
            let response = [];
            for (const item of data) {

                await businessObject.update(item._id, item.title, item.value,
                    item.status, item.won_time, 'integrated')
            }
            let builder = new Parser.Builder();
            let xmlData = builder.buildObject(xmlObj);
            let xmlEncodeURI = encodeURI(xmlData);

            const res = await axios.post(process.env.URL_BLING +
                `?apikey=${process.env.TOKEN_BLING}&xml=${xmlEncodeURI}`);
            response.push(res.data)

            return response;
        } catch (e) {
            return e;
        };
    },
};