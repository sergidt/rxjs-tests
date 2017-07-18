import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

interface Earthquake {
    title: string;
    place: string;
    mag: number;
    type: string;
}

const EARTH_QUAKES_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
const TYPE = 'earthquake';
const SITUATION = 'California';
const MAGNITUDE = 1.5;

function httpGetAsync(URL): Observable<any> {
    return Observable.create(observer => {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                observer.next(xmlHttp.responseText);
            }
        }
        xmlHttp.open("GET", URL, true); // true for asynchronous
        xmlHttp.send(null);
    });
}

const extractData = (data) => Observable.of(JSON.parse(data).features.map((x: any) => x.properties));

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

export function mainFRP() {
    httpGetAsync(EARTH_QUAKES_URL)
    .switchMap(extractData)
//    .switchMap((earthquakes: Array<Earthquake>)=> );
    .subscribe(console.log);
}