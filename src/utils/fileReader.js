const fs = require("fs");

class FileReader {
  read(file) {
    const data = JSON.parse(file, (key, value) => {
      if (
        typeof value === "string" &&
        value.startsWith("/Function(") &&
        value.endsWith(")/")
      ) {
        value = value.substring(10, value.length - 2);
        return eval("(" + value + ")");
      }
      return value;
    });

    return data;
  }
}
module.exports = FileReader;
