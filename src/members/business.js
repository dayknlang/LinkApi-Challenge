const mongoose = require('mongoose');
const businessDb = mongoose.model('SetSchema');

class business {
    constructor(title, value, status, won_time, integration) {
        this.title = title,
        this.value = value,
        this.status = status,
        this.won_time = won_time,
        this.integration = integration
    };

    async create(data) {
        return await businessDb.create(data);
    };

    async getByid(id) {
        try {
            return await businessDb.findOne({ _id: id });
        } catch (error) {
            return undefined;
        }
    };

    async update(id, title, value, status, won_time, integration) {
        let businessData= await this.getByid(id);

            businessData.title = title,
            businessData.value = value,
            businessData.status = status,
            businessData.won_time = won_time,
            businessData.integration = integration

        await businessData.save(businessData);

    };


};

module.exports = business;