const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 0; i <= hasta; i++) {
      let resultado = base * i;
      salida += `${base} ${"x"} ${i} = ${resultado}\n`;
      consola += `${base} ${"x".white} ${i} = ${colors.yellow(resultado)}\n`;
    }
    if (listar) {
      console.log("====================".red);
      console.log("Tabla del ", colors.yellow(base));
      console.log("====================".red);

      console.log(colors.underline.blue(consola));
    }
    fs.writeFileSync(`./salida/Tabla-del-${base}.txt`, salida);

    return colors.rainbow(`Tabla-del-${base}.txt`);
  } catch (err) {
    throw err;
  }
};
/*OPERACION PRE PROMESA
const crearArchivo = (base = 5) => {
  let salida = "";

  console.log(`=================\n
              ===Tabla del ${base}===\n
              =================`);

  for (let i = 0; i <= 10; i++) {
    let resultado = base * i;
    salida += `${base} x ${i} = ${resultado}\n`;
  }
  console.log(salida);

  fs.writeFileSync(`Tabla-del-${base}.txt`, salida);

  console.log(`Tabla-del-${base}.txt creada`);
};


*/

/*USO DEL METODO writeFile donde puedes personalizar el mensaje de error
fs.writeFile(`tabla-del-${numero}.txt`, salida, (err) => {
  if (err) throw new err();
  console.log("Archivo creado");
});*/

module.exports = {
  crearArchivo,
};
