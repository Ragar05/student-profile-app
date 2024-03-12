(() => {
    const data = [
        {
            name: "Sandman",
            image: "https://i.blogs.es/6d005b/sandman-cartel/450_1000.jpeg",
            description: "Cuando Sandman, el ser cósmico que controla los sueños, es capturado y mantenido prisionero durante más de un siglo, debe viajar a través de diferentes mundos y líneas de tiempo para arreglar el caos que ha causado su ausencia.",
        },
        {
            name: "Black mirror",
            image: "https://pbs.twimg.com/media/D7WH3W-W4AYeMy0.jpg",
            description: "El lado oscuro de la era tecnológica en la que se vive: la paranoia de ser vigilados como en un panóptico, los usos terroristas de las nuevas herramientas y su relación con la experiencia cotidiana.",
        },
        {
            name: "Suits",
            image: "https://i.pinimg.com/originals/26/89/d5/2689d5bb64e79f5627c06c93ed93a876.jpg",
            description: "El gran abogado corporativo de Manhattan, Harvey Specter y su equipo, Donna Paulsen, Louis Litt y Alex Williams, se lanzan a un juego por obtener el poder cuando un nuevo socio se une a la empresa.",
        },
        {
            name: "La casa de papel",
            image: "https://www.aceprensa.com/wp-content/uploads/2019/08/71446-1-683x1024.jpg",
            description: "Una banda organizada de ladrones se propone cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.",
        }
    ];

    const createCardItem = ({
        name,
        image,
        description
    }) => {
        return `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${image}" alt="Card image cap" with="90px" height="200px">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>`
    }

    const cardContainer = document.getElementById("card-movie-container");

    data.forEach((movie) => {
        const card = createCardItem(movie);
        cardContainer.innerHTML += card;
    })
})()