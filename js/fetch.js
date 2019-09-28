let data

fetch("https://swapi.co/api/people")
    .then(response =>
        //Este response me regresa un JSON 
        response.json())
    .then(json => {
        data = json
        return fetch('https://swapi.co/api/planets/1/')
    })
    .then((response) => response.json())
    .then(json => {
        data.homeworld = json
        let lista = ""
        let options = ""
        let contenido = ""
        for (var i = 0; i < data.results.length; i++) {   
            lista += data.results[i].name + "<br>"
            options += "<option>" + data.results[i].eye_color + "</option>"
            contenido += "<tr>"
            contenido += "<td>" + data.results[i].name + "</td>"
            contenido += "<td>" + data.results[i].eye_color + "</td>" 
            contenido += "</tr>"
            }
        document.getElementById("listado").innerHTML = lista
        document.getElementById("options").innerHTML = options
        document.getElementById("tabla").innerHTML = contenido
        document.getElementById("exampleModal").innerHTML = lista
        
        }
       ) 