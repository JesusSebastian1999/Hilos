const functions = require('firebase-functions');
exports.saludo = functions.https.onRequest((request, response) => {
    try {
      if (!request.query.fecha) {
        throw new Error("Falta la fecha");
      } else if (!request.query.nombre2) {
        throw new Error("Falta el nombre ");
      }else if (!request.query.genero) {
        throw new Error("Falta el genero ");
      }
      response.send(`!Hola ${request.query.nombre2} tu cumpliaños es el ${request.query.fecha} y tu genero de musica fovorito es ${request.query.genero}`);
    } catch (e) {
      response.send(e.message);
    }
   });
   