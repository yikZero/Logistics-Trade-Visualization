import * as THREE from "three";
import convertTo0xFormat from "./convertTo0xFormat";

function addFlyLinePoint(
  sphere: THREE.Mesh,
  pointPosition: { x: number; y: number; z: number },
  earthRadius: number,
  color: string
) {
  const normalizedPosition = new THREE.Vector3(
    pointPosition.x,
    pointPosition.y,
    pointPosition.z
  ).normalize();
  const surfacePosition = normalizedPosition.multiplyScalar(earthRadius + 0.01);

  // Main circle
  const geometry = new THREE.CircleGeometry(0.04, 32);
  const material = new THREE.MeshBasicMaterial({
    color: convertTo0xFormat(color),
    side: THREE.DoubleSide,
    transparent: true,
  });
  const pointMesh = new THREE.Mesh(geometry, material);

  // Ring 1
  const ringGeometry1 = new THREE.RingGeometry(0.06, 0.07, 32);
  const ringMaterial1 = material.clone();
  const ring1 = new THREE.Mesh(ringGeometry1, ringMaterial1);

  // Ring 2
  const ringGeometry2 = new THREE.RingGeometry(0.08, 0.09, 32);
  const ringMaterial2 = material.clone();
  const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);

  [pointMesh, ring1, ring2].forEach((mesh) => {
    mesh.position.set(surfacePosition.x, surfacePosition.y, surfacePosition.z);
    mesh.lookAt(new THREE.Vector3(0, 0, 0));
    sphere.add(mesh);
  });

  return { pointMesh, ring1, ring2 };
}

export default addFlyLinePoint;
