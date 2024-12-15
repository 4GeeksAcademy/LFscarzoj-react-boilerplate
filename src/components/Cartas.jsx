//Se debe de hacer asi, como un objeto para poder despues identificar la id del objeto y ademas seria un useState que estaría vacio y que cambiaria con un onChange o onClick al pulsar iniciar juego que haria un array aleatorio con  14 preguntas dispuestas en 7 cartas diferentes

const preguntas = [
  "¿El país dónde escondiste el diamante es interior (no se encuentra bañado por costa)?",
  "¿El país dónde escondiste el diamante se encuentra bañado por más de un mar/océano?",
  "¿La bandera del país dónde escondiste el diamante está compuesta únicamente por 2 colores?",
  "¿La bandera del país dónde escondiste el diamante está compuesta únicamente por 3 colores?",
  "¿La bandera del país dónde escondiste el diamante está compuesta de franjas horizontales?",
  "¿La bandera del país dónde escondiste el diamante está compuesta de franjas verticales?",
  "¿La bandera del país dónde escondiste el diamante posee una cruz?",
  "¿La bandera del país dónde escondiste el diamante posee el color rojo?",
  "¿La bandera del país dónde escondiste el diamante posee el color azul?",
  "¿La bandera del país dónde escondiste el diamante posee el color verde?",
  "¿La bandera del país dónde escondiste el diamante posee el color blanco?",
  "¿La bandera del país dónde escondiste el diamante posee el color amarillo?",
  "¿La bandera del país dónde escondiste el diamante posee el color naranja?",
  "¿La bandera del país dónde escondiste el diamante posee el color negro?",
  "¿El país dónde escondiste el diamante es una isla?",
  "¿El país donde escondiste el diamante está bañado por costa?",
  "¿El país dónde escondiste el diamante se encuentra bañado por el Mar Mediterráneo?",
  "¿El país dónde escondiste el diamante se encuentra bañado por el Mar Báltico?",
  "¿El país dónde escondiste el diamante se encuentra bañado por el Mar Negro?",
  "¿El país dónde escondiste el diamante se encuentra bañado por el Océano Atlántico?",
  "¿El país dónde escondiste el diamante se encuentra en el Norte de Europa?",
  "¿El país dónde escondiste el diamante se encuentra en el Sur de Europa?",
  "¿El país dónde escondiste el diamante se encuentra en el Este de Europa?",
  "¿El país dónde escondiste el diamante se encuentra en el Oeste de Europa?",
  "¿El país dónde escondiste el diamante es famoso por su producción de vinos?",
  "¿El país dónde escondiste el diamante es conocido por su 'Fish and chips'?",
  "¿El país dónde escondiste el diamante es famoso por su producción de aceite de oliva?",
  "¿El país dónde escondiste el diamante es famoso por su elegante pastelería?",
  "¿En el país dónde escondiste el diamante se pueden admirar auroras boreales?",
  "¿El país dónde escondiste el diamante es un destino turístico de verano en el que puedes disfrutar de sus playas?",
  "¿El país dónde escondiste el diamante es un destino turístico de invierno en el que puedes disfrutar de la nieve?",
  "¿Has viajado previamente al país dónde escondiste el diamante?",
  "¿He viajado previamente al país dónde escondiste el diamante?",
  "¿Has probado previamente comida típica del país dónde escondiste el diamante?",
  "¿He probado previamente comida típica del país dónde escondiste el diamante?",
  "¿En nuestra ciudad hay restaurantes que sirvan comida típica del país dónde escondiste el diamante?",
  "¿Hablas tú el idioma del país dónde escondiste el diamante?",
  "¿Hablo yo el idioma del país dónde escondiste el diamante?",
  "¿Sabrías decirme el nombre del Presidente del Gobierno/Primer Ministro de ese país?",
  "¿Sabría yo decirte el nombre del Presidente del Gobierno/Primer Ministro de ese país?",
  "¿El país dónde escondiste el diamante forma parte de Escandinavia?",
  "¿El país dónde escondiste el diamante forma parte de los países nórdicos?",
  "¿El país dónde escondiste el diamante es uno de los países que conformaron la antigua Yugoslavia?",
  "¿El país dónde escondiste el diamante limita con la cordillera de los Pirineos?",
  "¿El país dónde escondiste el diamante limita con la cordillera de los Alpes?",
  "¿El país dónde escondiste el diamante limita con la cordillera de los Balcanes?",
  "¿El país dónde escondiste el diamante limita con la cordillera de los Cárpatos?",
  "¿El país dónde escondiste el diamante limita únicamente con un país?",
  "¿El país dónde escondiste el diamante limita con sólo 2 países?",
  "¿El país dónde escondiste el diamante limita con sólo 3 países?",
  "¿El país dónde escondiste el diamante limita con sólo 4 países?",
  "¿El país dónde escondiste el diamante limita con 5 o más países?",
  "¿Se conduce por la izquierda en el país dónde escondiste el diamante?",
  "¿Se conduce por la derecha en el país dónde escondiste el diamante?",
  "¿En el país dónde escondiste el diamante el salario medio es mayor que el de nuestro país?",
  "¿En el país dónde escondiste el diamante el salario medio es menor que el de nuestro país?",
  "¿En la capital del país dónde escondiste el diamante se encuentra el museo de Anna Frank?",
  "¿El país dónde escondiste el diamante tiene como moneda oficial el Euro?",
  "¿El país dónde escondiste el diamante tiene como moneda oficial una divisa distinta del Euro?",
  "¿El país dónde escondiste el diamante es conocido por sus balnearios termales al aire libre?",
  "¿El país dónde escondiste el diamante es conocido por su Oktoberfest?",
  "¿El país dónde escondiste el diamante es conocido por su fabricación de relojes?",
  "¿El país dónde escondiste el diamante es conocido por su pasta y su pizza?",
  "¿El país dónde escondiste el diamante es conocido por su paella y su jamón ibérico?",
  "¿En la capital del país dónde escondiste el diamante se encuentra la Casa Danzante?",
  "¿El país dónde escondiste el diamante es conocido por sus pasteles de Belém?",
  "¿El nombre de la capital del país dónde escondiste el diamante comienza por vocal?",
  "¿El nombre de la capital del país dónde escondiste el diamante comienza por consonante?",
  "¿El nombre del país dónde escondiste el diamante comienza por vocal?",
  "¿El nombre del país dónde escondiste el diamante comienza por consonante?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'S'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'K'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'E'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'P'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'I'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'C'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'H'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'A'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'B'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'R'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'U'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'F'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'N'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'L'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'M'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'G'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'D'?",
  "¿El nombre del país dónde escondiste el diamante comienza por la letra 'T'?",
  "¿El idioma oficial del país dónde escondiste el diamante proviene de la lengua romance?",
  "¿El idioma oficial del país dónde escondiste el diamante proviene de la lengua eslava?",
  "¿El idioma oficial del país dónde escondiste el diamante proviene del ruso antiguo?",
  "¿El idioma oficial del país dónde escondiste el diamante proviene de la lengua germánica?",
  "¿El país dónde escondiste el diamante es conocido por sus pierogis?",
  "¿En la capital del país dónde escondiste el diamante se encuentra la sede de la Unión Europea?",
  "¿El país dónde escondiste el diamante es el país natal de Mozart?",
  "¿El país dónde escondiste el diamante es conocido por su crianza y exportación de salmón?",
  "¿El país dónde escondiste el diamante es conocido por ser el país de los fundadores de Ikea?",
  "¿El país dónde escondiste el diamante es conocido por sus impresionantes glaciares y géiseres?",
  "¿El país dónde escondiste el diamante es conocido por ser la cuna de la filosofía y la mitología?",
  "¿El país dónde escondiste el diamante es conocido por su sauna?",
  "¿El país dónde escondiste el diamante es conocido por ser la residencia habitual del Conde Drácula?",
  "¿A la capital de ese país se llega desde nuestra localización en menos de 2 horas de avión?",
  "¿A la capital de ese país se llega desde nuestra localización en más de 2 horas de avión?",
  "¿Sabría yo decir el nombre de la capital del país dónde escondiste el diamante?",
  "¿Sabrías decir el nombre de la capital del país dónde escondiste el diamante?",
  "¿Sabría yo decir 'te quiero' en el idioma oficial del país dónde escondiste el diamante?",
  "¿Sabrías decir 'te quiero' en el idioma oficial del país dónde escondiste el diamante?",
  "¿El país dónde escondiste el diamante tiene una población superior a 15 millones de habitantes?",
  "¿El país dónde escondiste el diamante tiene una población inferior a 15 millones de habitantes?",
  "Si escucharas a personas de ese país hablando en su idioma, ¿sabrías de qué país son?",
  "Si yo escuchara a personas de ese país hablando en su idioma, ¿sabría de qué país son?",
  "¿El país dónde escondiste el diamante limita con el continente asiático?",
  "¿Crees que yo podría aprender el idioma de ese país fácilmente?",
  "¿Crees que podrías aprender el idioma de ese país fácilmente?",
  "¿La capital del país dónde escondiste el diamante es conocida por llamarse como un nombre propio femenino?",
  "¿La bandera del país dónde escondiste el diamante posee algún símbolo?",
  "¿La bandera del país dónde escondiste el diamante posee algún símbolo (exceptuando las cruces)?",
  "¿El país dónde escondiste el diamante es conocido por tener varias estrellas en su bandera?",
  "¿La bandera del país dónde escondiste el diamante posee una media luna?",
  "¿El país dónde escondiste el diamante forma parte de los micro-estados?",
  "¿El país dónde escondiste el diamante es el micro-estado que limita únicamente con Francia?",
  "¿El país dónde escondiste el diamante es el micro-estado dónde reside el Papa?",
  "¿El país dónde escondiste el diamante es el micro-estado que limita con España y Francia?",
  "¿El país dónde escondiste el diamante es uno de los micro-estados que son islas del mediterráneo?",
  "¿El país dónde escondiste el diamante es uno de los micro-estados que limita con Italia?",
  "¿Es el país donde escondiste el diamante el micro-estado que limita con 3 países?",
  "¿Este país fue el ganador de la última edición de eurovisión?",
  "¿La selección de fútbol de este país ganó la última edición de la eurocopa de fútbol?",
  "¿El actual jugador de tenis n°1 del ranking ATP, es originario de este país?",
];

const listaPreguntas = listaPreguntasTexto.map((pregunta) => ({
  pregunta,
  id: crypto.randomUUID(),
}));

console.log(listaPreguntas);

export default listaPreguntas;