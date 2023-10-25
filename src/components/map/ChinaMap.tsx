import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';

import lon2xyz from "../../utils/lon2xyz";
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
    const lineCoordinates = feature.geometry.coordinates;

    const geometry = new LineGeometry();
    const vertices: number[] = [];

    lineCoordinates.forEach(([longitude, latitude]) => {
      const { x, y, z } = lon2xyz(earthRadius, longitude, latitude);
      vertices.push(x, y, z);
    });

    geometry.setPositions(vertices);

    const material = new LineMaterial({
      color: convertTo0xFormat(color),
      linewidth: 0.001,
    });

    const line = new Line2(geometry, material);
    sphere.add(line);
  });

  return null;
}

export default ChinaMap;