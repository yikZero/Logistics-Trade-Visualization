import * as THREE from "three";
import lon2xyz from "../../utils/lon2xyz";
import TradePointsMap from "../../assets/json/TradePoints.json";
import convertTo0xFormat from "../../utils/convertTo0xFormat";

function TradePoints({
  sphere,
  earthRadius,
  color = "#ff0000",
}: {
  sphere: THREE.Mesh;
  earthRadius: number;
  color?: string;
}) {

  TradePointsMap.features.forEach((feature) => {
    const name = feature.properties.name;

    // Determine color based on name
    const featureColor = (name === "北京") ? "#FF5C00" : color;

    const pointMaterial = new THREE.MeshBasicMaterial({
      color: convertTo0xFormat(featureColor),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1.0,
    });

    const ringMaterial1 = pointMaterial.clone();
    ringMaterial1.opacity = 0.7;

    const ringMaterial2 = pointMaterial.clone();
    ringMaterial2.opacity = 0.3;

    const [longitude, latitude] = feature.geometry.coordinates;
    const { x, y, z } = lon2xyz(earthRadius, longitude, latitude);
    const normalizedPosition = new THREE.Vector3(x, y, z).normalize();
    const surfacePosition = normalizedPosition.multiplyScalar(earthRadius + 0.01);

    // Main circle
    const geometry = new THREE.CircleGeometry(0.025, 32);
    const pointMesh = new THREE.Mesh(geometry, pointMaterial);

    // Ring 1
    const ringGeometry1 = new THREE.RingGeometry(0.04, 0.05, 32);
    const ring1 = new THREE.Mesh(ringGeometry1, ringMaterial1);

    // Ring 2
    const ringGeometry2 = new THREE.RingGeometry(0.06, 0.08, 32);
    const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);

    [pointMesh, ring1, ring2].forEach((mesh) => {
      mesh.position.set(surfacePosition.x, surfacePosition.y, surfacePosition.z);
      mesh.lookAt(new THREE.Vector3(0, 0, 0));
      sphere.add(mesh);
    });
  });

  return null;
}

export default TradePoints;
