const  Event = require('../../models/event')
module.exports = {
    getEvents: () => {
        return Event.find()
        .then(results => {
            return results.map(result => {
                return {...result._doc, _id: result._doc._id.toString()}
            })
        })
        .catch(error => {
            console.log(error)
        })
    },

    createEvent: (args) => {
        return new Event({
            title: args.input.title,
            description: args.input.description,
            price: args.input.price,
            date: new Date().toISOString()
        })
        .save()
        .then(result => {
            return { ...result._doc, _id: result._doc._id.toString() };
        })
        .catch(error => {
            console.log(error)
        })
    },
}