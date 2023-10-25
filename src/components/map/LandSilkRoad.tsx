import { lon2xyz } from "../../utils/lon2xyz";
import LandSilkRoadMap from "../../assets/json/LandSilkRoad.json";
import convertTo0xFormat from "../../utils/convertTo0xFormat";

import * as THREE from "three";


function LandSilkRoad({
  sphere,
  earthRadius,
  color = "#ff0000"
}: {
  sphere: THREE.Mesh;
  earthRadius: number;
  color?: string;
}) {
  LandSilkRoadMap.features.forEach((feature: any) => {
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];

    if (feature.geometry.type === "LineString") {
      feature.geometry.coordinates.forEach((coordinatePair: number[]) => {
        const [longitude, latitude] = coordinatePair;
        const { x, y, z } = lon2xyz(earthRadius, longitude, latitude);
        vertices.push(x, y, z);
      });
    } else if (feature.geometry.type === "MultiLineString") {
      feature.geometry.coordinates.forEach((line: number[][]) => {
        line.forEach((coordinatePair: number[]) => {
          const [longitude, latitude] = coordinatePair;
          const { x, y, z } = lon2xyz(earthRadius, longitude, latitude);
          vertices.push(x, y, z);
        });
      });
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.LineBasicMaterial({
      color: convertTo0xFormat(color),
      linewidth: 1,
    });

    const line = new THREE.Line(geometry, material);
    sphere.add(line);
  });

  return null;
}

export default LandSilkRoad;
