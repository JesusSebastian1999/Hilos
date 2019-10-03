onmessage = evt => {
 postMessage(`!Hola ${evt.data.nombre2} Tu cumpleaños es el ${evt.data.fecha} y tu genero de musica fovorito es ${evt.data.genero}`);
};
