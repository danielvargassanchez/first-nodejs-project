const xl = require("./modules/readExcel");
const event = require("./modules/emitter");

const start = () => {
  var data = xl.data.readExcel("./excelUsers.xlsx", "Users");

  var userArray = [];
  data.forEach((u) => {
    console.log(u);
  });

  event.data.emitData("Even_Emitter");
  event.data.emitData("Even_Emitters");
};

start();
