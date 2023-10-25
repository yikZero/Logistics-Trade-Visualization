import { lon2xyz } from "../../utils/lon2xyz";
import ChinaGeoJSON from "../../assets/json/China.json";
import convertTo0xFormat from "../../utils/convertTo0xFormat";

import * as THREE from "three";

function ChinaMap({
  sphere,
  earthRadius,
  color = "#ff0000"
}: {
  sphere: THREE.Mesh;
  earthRadius: number;
  color?: string;
}) {
  ChinaGeoJSON.features.forEach((feature) => {
    feature.geometry.coordinates.forEach((polygon) => {
      polygon.forEach((ring) => {
        const geometry = new THREE.BufferGeometry();
        const vertices: number[] = [];

        ring.forEach(([longitude, latitude]) => {
          const { x, y, z } = lon2xyz(earthRadius, longitude, latitude);
          vertices.push(x, y, z);
        });

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
    });
  });

  return null;
}

export default ChinaMap;
