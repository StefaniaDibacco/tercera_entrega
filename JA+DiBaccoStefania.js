const termino = (n) => {
    console.log('Proceso completo', n, 'palabras totales');
  };
  
  const mostrarTexto = (texto, funcion, intervalo = 500) => {
    const misPalabras= texto.split(' ');
    let contador = 0;
    return new Promise((resolve, reject) => {
      let timer = setInterval(() => {
        if (misPalabras[contador]) {
          console.log(misPalabras[contador]);
          contador++;
        } else {
          clearInterval(timer);
          funcion(contador);
          resolve();
        }
      }, intervalo);
    });
  };
  
  
  mostrarTexto('La cucaracha', termino)
  .then (() => mostrarTexto('la cucaracha', termino))
  .then (() => mostrarTexto('Ya no puede caminar', termino));