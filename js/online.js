var aj = new XMLHttpRequest();
aj.open("GET", "https://api.twitch.tv/kraken/streams?client_id=6ppzy3lbu10gkcjhzsq6v6vm3ow6s9&channel=sombrero", true);
aj.onload = function(d) {
    var data = JSON.parse(aj.responseText);
    document.body.className = data._total ? "" : "offline";
}
aj.send();