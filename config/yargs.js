const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "Muestra en consola el resultado de la operación",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Número hasta el cual se multiplicará la base",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
