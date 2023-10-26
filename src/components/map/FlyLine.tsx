import lon2xyz from "../../utils/lon2xyz";
import FlyLineMap from "../../assets/json/FlyLine.json";
import AddFlyLine from "../../utils/addFlyLline";
import addFlyLinePoint from "../../utils/addFlyLinePoint";

import * as THREE from "three";

function FlyLine({
  sphere,
  earthRadius,
}: {
  sphere: THREE.Mesh;
  earthRadius: number;
}) {

  FlyLineMap.features.forEach((feature: any) => {
    const coordinates = feature.geometry.coordinates;
    const startLonLat = coordinates[0];
    const endLonLat = coordinates[1];

    const startXYZ = lon2xyz(earthRadius, startLonLat[0], startLonLat[1]);
    const endXYZ = lon2xyz(earthRadius, endLonLat[0], endLonLat[1]);

    const startPoint = new THREE.Vector3(startXYZ.x, startXYZ.y, startXYZ.z);
    const endPoint = new THREE.Vector3(endXYZ.x, endXYZ.y, endXYZ.z);

    AddFlyLine(sphere, startPoint, endPoint, feature.to, "#48A7FF", 0.01);

    addFlyLinePoint(sphere, startXYZ,earthRadius, "#FF971E");
    addFlyLinePoint(sphere, endXYZ,earthRadius, "#48A7FF");
  });

  return null;
}

export default FlyLine;
