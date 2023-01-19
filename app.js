const { option } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();
//console.log(argv);
//
crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));

//const [, , arg3 = "base = 5"] = process.argv;
//const [, base = 5] = arg3.split("=");
//
//let base = 88;
//
