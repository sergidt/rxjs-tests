interface Earthquake {
    title: string;
    place: string;
    mag: number;
    type: string;
}

let earthquakes;

const EARTH_QUAKES_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
const SITUATION = 'California';
const MAGNITUDE = 3;

 function httpGetAsync(theUrl, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function extractData(data) {
    const JSONData = JSON.parse(data);
    applyFilters(JSONData.features);
}

function applyFilters(data) {
     earthquakes = filterEarthquakes(data);
}

function filterEarthquakes(data) {
     let items = [];
     for (const item of data) {
         const properties = item.properties;
         if (~properties.place.indexOf(SITUATION) && properties.mag > MAGNITUDE) {
             items.push(item);
         }
     }
     return items;
}

export function mainJS() {
    httpGetAsync(EARTH_QUAKES_URL, extractData);
    console.log(earthquakes);
}