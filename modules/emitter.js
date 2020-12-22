const { EventEmitter } = require("events");

var methods = {
  emitData: function (eventEmitter) {
    const myEmitter = new EventEmitter();
    myEmitter.on("Even_Emitter", () => {
      console.log("evento 1");
    });

    myEmitter.on("Even_Emitter", () => {
      console.log("evento 2");
    });

    myEmitter.on("Even_Emitters", () => {
      console.log("evento 1.1");
    });

    myEmitter.emit(eventEmitter);
  },
};

exports.data = methods;
