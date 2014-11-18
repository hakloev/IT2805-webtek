var url = "/static/files/varsel.xml";

var weather = { 
    loadXML: function () {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                data = xmlhttp.responseXML;
                weather.parseXML(data);
            }    
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    },
    parseXML: function (xml) {
        var gislefoss =  xml.getElementsByTagName("body")[0].childNodes[0].data;
        var temp = xml.getElementsByTagName("temperature")[0].getAttribute('value');
        var rain = xml.getElementsByTagName("precipitation")[0].getAttribute('value');
        var windspeed = xml.getElementsByTagName('windSpeed')[0].attributes;
        var winddir = xml.getElementsByTagName("windDirection")[0].attributes;
        var icon = xml.getElementsByTagName("symbol")[0].attributes;
        var copyright = xml.getElementsByTagName("link")[0].getAttributeNode("text");
        var copyrightUrl = xml.getElementsByTagName("link")[0].getAttributeNode("url");
        document.getElementById("forecast").innerHTML = "<p>" + gislefoss + "</p>";
        document.getElementById("temperature").innerHTML = "&deg; " + temp;
        document.getElementById("wind-speed").innerHTML = "<strong>Vind:</strong> " + windspeed[0].value + " m/s &ndash; " + winddir[2].value;
        document.getElementById("wind-strength").innerHTML = "<strong>Styrke:</strong> " + windspeed[1].value;
        document.getElementById("rain").innerHTML = "<strong>Regn: </strong>" + rain + " mm";
        document.getElementById("weather-icon").src = "/static/images/weather/0" + icon[0].value + ".png";
        document.getElementById("weather-copyright").innerHTML = '<small><a href="' + copyrightUrl.value + '">' + copyright.value + "</a></small>";
    }
};

window.addEventListener('load', function() {
    weather.loadXML();
});
