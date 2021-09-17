

// === Declaracion de constantes ===

$('#loading-button').hide()

// === Funciones ===


function showMovies(arrayOfFilms) {
    let imageHTTP = 'https://image.tmdb.org/t/p/w500'
    $('#film-container').empty()

    for (let film of arrayOfFilms) {
        const plantilla = `
            <div class="col">
                <div class="card">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="${imageHTTP + film.poster_path}" class="card-img-top skeleton" alt="Portada de ${film.title}" data-movie-id=${film.id}>
                    </a>
                    <div class="card-body pt-2">
                        <h3 class="card-title text-center">
                            ${film.title}
                        </h3>
                    </div>
                </div>
            </div>`
        let movie = document.createElement("div")
        movie.setAttribute("class", "cartas") 
        movie.innerHTML = plantilla
        $('#film-container').append(movie)
    }
}


// Verifica que tenga una imagen para mostrar, sino tiene imagen se elimina el elemento

function checkData(array) {
    let index = 0
    while (index < array.length) {
        if (array[index][`poster_path`] === null) {
            array.splice(index, 1)
        } else {
            index++
        }
    }
    return array
}


async function callApi (findMovie = 'furious') {
    let API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=de72dd93dac3e3c6b2ec3687f0e1eff5&query='
    let API_SEARCH = `${API_URL + findMovie}` 

        const response = await fetch(API_SEARCH)
        const data = await response.json()
        console.log(data)
        return data.results
}

async function getData(movie) {
    let FUNDED_MOVIES = await callApi(movie)
    checkData(FUNDED_MOVIES)
    showMovies(FUNDED_MOVIES)
}


$(`#add-button`).click((event) => {
    event.preventDefault
    
    if ($(`#title`).val() === '') {
        return $(`#title`).addClass('wrong')
    } else {
        $(`#title`).removeClass('wrong')
    }
    let movie = `${$(`#title`).val()}`

    getData(movie)

    $('#add-button').hide()
    $('#loading-button').show()

        setTimeout(() => {
        $('#loading-button').hide()
        $('#add-button').show()
    }, 2000)
})

getData('furious')

