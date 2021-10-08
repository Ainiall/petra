const { SlashCommandBuilder } = require(`@discordjs/builders`);
const Discord = require(`discord.js`);

/**
 * Juego buscaminas
 *
 * @author Diego Marty (diegomarty00)
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName(`buscaminas`)
    .setDescription(`Juega una partida al buscaminas (solo tú podrás verla)`),
  async execute(interaction) {
    //Cadena que da vida al buscaminsa final con los iconos ocultos
    const choices = [
      `||:zero:||`,
      `||:one:||`,
      `||:two:||`,
      `||:three:||`,
      `||:four:||`,
      `||:five:||`,
      `||:six:||`,
      `||:seven:||`,
      `||:eight:||`,
      `||:bomb:||`,
    ];
    const bomb = 9; //El valor 9 representa el de la mina
    let dimension = 9;

    let bombas = Math.round((dimension * dimension * 2) / 10); //NUMERO DE BOMBAS - Se puede cambiar y mejorar si se quiere jugar con eso
    let bombasfinal = bombas;
    const number = new Array(dimension);
    for (let i = 0; i < dimension; i++) {
      number[i] = i; //crea la lista de números
    }
    let row = number[Math.floor(Math.random() * number.length)]; //Inicializa una posicion aleatoria
    let column = number[Math.floor(Math.random() * number.length)]; //Inicializa una posicion aleatoria

    var buscaminas = new Array(dimension); //Crea un array de dimension

    for (let i = 0; i < dimension; i++) {
      buscaminas[i] = new Array(dimension); //Hace que el array de antes sea bidimensional (un tablero)
    }

    for (let i = 0; i < dimension; i++) {
      for (let j = 0; j < dimension; j++) {
        buscaminas[i][j] = 0; //Inicializamos el tablero poniendo las casillas a cero
      }
    }
    while (bombas != 0) {
      // Hasta que no hayamoso colocado todas la bombas no se sale
      while (buscaminas[row][column] == 9) {
        //Cambias las posiciones si en ellas haya una bomba
        row = number[Math.floor(Math.random() * number.length)];
        column = number[Math.floor(Math.random() * number.length)];
      }
      //Si encuentra una casilla sin bomba, cambia su valor por el 9 (bomba) y resta una bomba al contador
      bombas = bombas - 1;
      buscaminas[row][column] = 9;

      //Esta parte es la mas liosa, pero lo que hacen los siguientes pasos es  mirar en que posicion esta la bomba para incrementar el valor de las casillas adyacentes si no son bombas.

      let iteri = 3; //Numero de casillas por fila para iterar

      for (let i = 0; i < iteri; i++) {
        let iterj = 3; //Numero de casillas por columna por iterar (Se reinicia por cada fila)
        if (row == 0 && i == 0) i++; //Si la casilla esta arriba del todo, se le aumenta el valor a la i
        if (row == dimension - 1 && i == 0) iteri--; //Si la casilla esta bajo del todo, las iteraciones se decrementan
        for (let j = 0; j < iterj; j++) {
          if (column == 0 && j == 0) j++; //Si la casilla esta a la izquierda del todo, se le aumenta la j
          if (column == dimension - 1 && j == 0) iterj--; //Si la casilla esta a la derecha del todo, se decrementan iteraciones
          if (i != 1 || j != 1)
            if (buscaminas[row + i - 1][column - 1 + j] != bomb)
              //Si no es la casilla inicial
              //Si no es una bomba
              buscaminas[row + i - 1][column - 1 + j]++; //Incrementar el valor casilla
        }
      }
    }
    let final = ``;
    //Finalmente cambiamos los numeros por los emojis ocultos para crear el juego
    for (let i = 0; i < dimension; i++) {
      for (let j = 0; j < dimension; j++) {
        buscaminas[i][j] = choices[buscaminas[i][j]];
        final += buscaminas[i][j];
      }
      final += `\n`;
    }

    return interaction.reply({
      content: `${final}\n¡No actives las **${bombasfinal}** que hay!`,
      ephimeral: true,
    });
  },
};
