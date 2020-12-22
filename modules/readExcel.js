const xl = require("xlsx");

var methods = {
  readExcel: function (filename, sheet) {
    const workbook = xl.readFile(filename);
    return xl.utils.sheet_to_json(workbook, sheet);
  },
};

exports.data = methods;
