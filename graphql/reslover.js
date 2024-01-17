const eventController = require('../event/controller/eventController')
module.exports = {
    events: eventController.getEvents,
    createEvent: eventController.createEvent
}