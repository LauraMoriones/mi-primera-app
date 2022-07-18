import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1> Esta es mi primera App</h1>

      <hr size="2px" color="black" />

      <h2>Hola, estos son mis juegos favoritos: </h2>
      <ul>
        <li>
          1: <strong>Super Mario Bros </strong>
        </li>
        <li>
          2: <strong>FIFA 22 </strong>
        </li>
        <li>
          3: <strong>God of War</strong>
        </li>
      </ul>
      <p className="App-parrafo">
        <strong>Super Mario Bros</strong> Es un videojuego de plataformas,
        diseñado por Shigeru Miyamoto, lanzado el 13 de septiembre de 1985 y
        producido por la empresa japonesa Nintendo, para la consola Nintendo
        Entertainment System (NES). El juego describe las aventuras de los
        hermanos Mario y Luigi, personajes que ya protagonizaron el arcade Mario
        Bros. de 1983. En esta ocasión ambos deben rescatar a la Princesa Peach
        del Reino Champiñón que fue secuestrada por el rey de los Koopas,
        Bowser. A través de ocho diferentes mundos, los jugadores pueden
        controlar a alguno de los dos hermanos y deben enfrentarse finalmente
        tras los niveles correspondientes de cada mundo a los monstruos de cada
        castillo para rescatar a la Princesa Peach.
      </p>
      <p>
        <strong>FIFA 22 </strong>
        es un videojuego desarrollado por EA Vancouver y EA Romania, siendo
        publicado por EA Sports. Está disponible para PlayStation 4, PlayStation
        5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y
        Nintendo Switch. Es la vigésimo novena entrega en la serie FIFA y fue
        lanzado el 1 de octubre de manera global. El primer tráiler del juego
        fue presentado el 11 de julio de 20214​ y muestra la nueva tecnología
        Hypermotion, que según palabras de EA brindará nueva experiencia más
        realista. Estas innovaciones están disponibles únicamente para
        PlayStation 5, Xbox Series y Stadia.
      </p>
      <p className="App-P2">
        <strong>God of War </strong>God of War es un videojuego de acción y
        aventuras desarrollado por Santa Monica Studio y publicado por Sony
        Computer Entertainment (SCE). Lanzado por primera vez el 22 de marzo de
        2005 para la consola PlayStation 2 (PS2), es la primera entrega de la
        serie del mismo nombre y la tercera cronológicamente.
      </p>
    </div>
  );
}
