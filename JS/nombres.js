// Función para obtener los parámetros de la URL
function getParams() {
    var params = {};
    var parts = window.location.search.substring(1).split('&');
    for (var i = 0; i < parts.length; i++) {
        var pair = parts[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
}

// Función para agregar los nombres de los equipos en la página index.html
function addTeamNames() {
    var params = getParams();
    document.getElementById("team1").textContent = params.team1 || "Equipo 1";
    document.getElementById("team2").textContent = params.team2 || "Equipo 2";
}
