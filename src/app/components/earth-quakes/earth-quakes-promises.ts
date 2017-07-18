interface Earthquake {
    title: string;
    place: string;
    mag: number;
    type: string;
}

let filteredData;

const EARTH_QUAKES_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
const TYPE = 'earthquake';
const SITUATION = 'California';
const MAGNITUDE = 1.5;

function httpGetAsync(URL): Promise<any> {
    return new Promise((resolve, _) => {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                resolve(xmlHttp.responseText);
        }
        xmlHttp.open("GET", URL, true); // true for asynchronous
        xmlHttp.send(null);
    });
}

function extractData(data) {
    const JSONData = JSON.parse(data);
    applyFilters(JSONData.features);
}

function applyFilters(data) {
    const earthquakes = filterEarthquakes(data);
    filteredData = groupByMagnitude(earthquakes);
}

function filterEarthquakes(data) {
    let items = [];
    for (const item of data) {
        const properties = item.properties;
        if (properties.type === TYPE && ~properties.place.indexOf(SITUATION) && properties.mag > MAGNITUDE) {
            items.push(item);
        }
    }
    return items;
}

function groupByMagnitude(earthquakes) {
    let groups = {};

    for (let eq of earthquakes) {
        const earthquake: Earthquake = eq.properties;
        const mag = Math.floor(earthquake.mag).toString();
        if (!groups[mag]){
            groups[mag] = [earthquake.title];
        }else {
            groups[mag] = [...groups[mag], earthquake.title];
        }
    }
    return groups;
}

export function mainPromises() {
    httpGetAsync(EARTH_QUAKES_URL)
        .then(data => {
            extractData(data);
            console.log(filteredData);
        });
}