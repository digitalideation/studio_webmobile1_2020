let getGPX = async function(url){
    let gpxfile = await fetch(url);
    let gpxtext = await gpxfile.text();

    let parser = new DOMParser();
    let doc = parser.parseFromString(
      gpxtext,
      "application/xml"
    );
   return doc;
};

let extractJsonCoordinates = function(gpx){
    let coordinates = [];
    let tracks = gpx.getElementsByTagName('trk');

    let count=0;
    for (let i = 0; i < tracks.length; i++) {
        let points = tracks[i].getElementsByTagName('trkpt')

        for (let x = 0; x < points.length; x++) { 

            let point = points[x],
                lat = parseFloat(point.getAttribute('lat')),
                lng = parseFloat(point.getAttribute('lon'));


            coordinates[count] = [lng, lat];

            count++;
        }

    }
   return coordinates;
};

let getCoordinatesFromGpxFile = async function(fileUrl) {
    let gpx = await getGPX(fileUrl);
    return extractJsonCoordinates(gpx);
}

export default getCoordinatesFromGpxFile;
