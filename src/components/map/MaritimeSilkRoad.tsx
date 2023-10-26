import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";

import lon2xyz from "../../utils/lon2xyz";
import MaritimeSilkRoadMap from "../../assets/json/MaritimeSilkRoad.json";
import convertTo0xFormat from "../../utils/convertTo0xFormat";

import * as THREE from "three";

function MaritimeSilkRoad({
  sphere,
  earthRadius,
  color = "#ff0000",
}: {
  sphere: THREE.Mesh;
  earthRadius: number;
  color?: string;
}) {
  MaritimeSilkRoadMap.features.forEach((feature) => {
    const geometry = new LineGeometry();
    const vertices: number[] = [];

    feature.geometry.coordinates.forEach((coordinatePair) => {
      const [longitude, latitude] = coordinatePair;
      const { x, y, z } = lon2xyz(earthRadius, longitude, latitude);
      vertices.push(x, y, z);
    });

    geometry.setPositions(vertices);

    const material = new LineMaterial({
      color: convertTo0xFormat(color),
      linewidth: 0.002,
      transparent: true,
      opacity: 0.7,
    });

    const line = new Line2(geometry, material);
    sphere.add(line);
  });

  return null;
}

export default MaritimeSilkRoad;
