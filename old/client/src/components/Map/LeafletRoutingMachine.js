import React, { useEffect } from "react";
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import pinIcon from "../../assets/destination.png"
import "leaflet-routing-machine";
import { UserIcon } from "./Icons";
const createRoutineMachineLayer = ({ p, color }) => {
  console.log(p)

  const instance = L.Routing.control({
    waypoints:
      [L.latLng(p[0], p[1]), L.latLng(p[2], p[3])],
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: true,
    fitSelectedRoutes: false,
    showAlternatives: false,
    lineOptions: {
      styles: [
        {
          color: color,
          weight: 5,
          opacity: 0.7,
        },
      ],
    },
    createMarker: function (i, wp, nWps) {
      return
    }


  });

  return instance;
};
// let DefaultIcon = L.icon({
//   iconUrl: pinIcon,
//   iconSize: [25, 41],
//   iconAnchor: [10, 41],
//   popupAnchor: [2, -40],
// });
// L.Marker.prototype.options.icon = DefaultIcon;
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
