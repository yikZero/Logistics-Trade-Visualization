import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';

import lon2xyz from "../../utils/lon2xyz";
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
    const geometry = new LineGeometry();
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

    geometry.setPositions(vertices);

    const material = new LineMaterial({
      color: convertTo0xFormat(color),
      linewidth: 0.002,
      transparent: true,
      opacity: 0.9,
    });

    const line = new Line2(geometry, material);
    sphere.add(line);
  });

  return null;
}

export default LandSilkRoad;
