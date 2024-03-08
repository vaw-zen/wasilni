import { useEffect, useRef, useState } from "react";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { DestinationIcon } from "./Icons";
import L from "leaflet";
import { useMap } from "react-leaflet";

const LeafletGeocoder = ({ getNearBy, setTransport, transport }) => {
    const mapFetched = useRef(false);
    const [marker, setMarker] = useState(null);
    const map = useMap();

    useEffect(() => {
        if (mapFetched.current) return;

        L.Control.geocoder({
            defaultMarkGeocode: false,
        })
            .on("markgeocode", function (e) {

                if (marker) {
                    marker.remove();
                }

                const latlng = e.geocode.center;

                getNearBy([latlng.lat, latlng.lng], setTransport, transport);

                const newMarker = L.marker(latlng, { icon: DestinationIcon }).addTo(map);
                newMarker.bindPopup(e.geocode.name);
                setMarker(newMarker);

                map.fitBounds(e.geocode.bbox);
            })
            .addTo(map);
        mapFetched.current = true;
    }, [marker, map]);

    return null;
};

export default LeafletGeocoder;
