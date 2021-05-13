

/*Milestone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili
come da layout.
*/

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];
const cardContainer = document.querySelector(".card_container");




/*
Milestone 2 Coloriamo le icone per tipo
*/
icons.forEach((icon) => {

    if (icon.type === "animal") {
        icon.colorType = "blue";
    } else if (icon.type === "vegetable") {
        icon.colorType = "yellow";
    } else if (icon.type === "user") {
        icon.colorType = "purple";
    }
})

console.log(icons);
/*
icons.forEach((icon) => {
    cardContainer.insertAdjacentHTML("beforeend",
        `   <div class="card">
            <i class="${icon.family} ${icon.prefix}${icon.name}" style = "color: ${icon.colorType}"></i>
            <span>${icon.name}</span>
        </div>`)
})
*/
/*
Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/
const animalIcons = [], vegetableIcons = [], userIcons = [];

icons.forEach((icon) => {
    if (icon.type === "animal") {
        animalIcons.push(icon)
    } else if (icon.type === "vegetable") {
        vegetableIcons.push(icon)
    } else if (icon.type === "user") {
        userIcons.push(icon)
    }
})

console.log(animalIcons);
console.log(vegetableIcons);
console.log(userIcons);

/*
function test() {
    var elemento = document.getElementById("scelta_tipologia").value;
    let stampa = [];
    if (elemento === "all") {
        alert("all selezionato")
        stampa = icons;
    } else if (elemento === "animal") {
        alert("animal selezionato")
        stampa = animalIcons;
    } else if (elemento === "vegetable") {
        alert("vegetable selezionato")
        stampa = vegetableIcons;
    } else if (elemento === "user") {
        alert("user selezionato")
        stampa = userIcons;
    }

    alert("selezione fatta")
    console.log(stampa);
    stampa.forEach((icon) => {
        cardContainer.insertAdjacentHTML("beforeend",
            `   <div class="card">
            <i class="${icon.family} ${icon.prefix}${icon.name}" style = "color: ${icon.colorType}"></i>
            <span>${icon.name}</span>
        </div>`)
    })

}
*/

const selectValue = document.getElementById("scelta_tipologia");

selectValue.addEventListener("change", () => {
    const valore = selectValue.value;
    console.log(valore);

    let stampa = [];
    if (valore === "all") {
        stampa = icons;
    } else if (valore === "animal") {
        stampa = animalIcons;
    } else if (valore === "vegetable") {
        stampa = vegetableIcons;
    } else if (valore === "user") {
        stampa = userIcons;
    }
    console.log(stampa);
    stampa.forEach((icon) => {
        cardContainer.insertAdjacentHTML("beforeend",
            `   <div class="card">
            <i class="${icon.family} ${icon.prefix}${icon.name}" style = "color: ${icon.colorType}"></i>
            <span>${icon.name}</span>
        </div>`)
    })


})

