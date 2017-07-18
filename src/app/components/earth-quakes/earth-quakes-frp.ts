import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

interface Earthquake {
    title: string;
    place: string;
    mag: number;
}

const EARTH_QUAKES_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
const TYPE = 'earthquake';
const SITUATION = 'California';
const MAGNITUDE = 3;

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

const extractData = (data) : Observable<any> => Observable.from(JSON.parse(data).features.map((x: any) => x.properties));

export function mainFRP() {
    httpGetAsync(EARTH_QUAKES_URL)
    .switchMap(extractData)
    .filter((earthquake: Earthquake) => earthquake.place.indexOf(SITUATION) > -1)
    .filter((earthquake: Earthquake) => earthquake.mag > MAGNITUDE)
    .subscribe(console.log);
}