import { lon2xyz } from "../../utils/lon2xyz";
import ChinaGeoJSON from "../../assets/json/China.json";

import * as THREE from "three";

function ChinaMap({ sphere, earthRadius }: { sphere: THREE.Mesh, earthRadius: number }) {

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

        const indices: number[] = [];
        for (let i = 1; i < vertices.length / 3 - 1; i++) {
          indices.push(0, i, i + 1);
        }

        geometry.setIndex(indices);

        const material = new THREE.MeshBasicMaterial({
          color: 0xff0000,
          side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(geometry, material);
        sphere.add(mesh);
      });
    });
  });

  return null;
}

export default ChinaMap;