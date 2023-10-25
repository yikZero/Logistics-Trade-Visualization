import * as THREE from "three";

function AddFlyLine(
  sphere: THREE.Mesh,
  start: THREE.Vector3,
  end: THREE.Vector3,
  color?: string,
  thickness?: number
) {
  const angle = start.angleTo(end);
  const height = angle * 7.5;
  const middle = new THREE.Vector3().lerpVectors(start, end, 0.5).setY(height);

  const curve = new THREE.CubicBezierCurve3(start, start, middle, end);

  const tubeGeometry = new THREE.TubeGeometry(curve, 20, thickness || 0.1, 8, false);
  const material = new THREE.MeshBasicMaterial({ color: color || 0xff0000 });
  const tube = new THREE.Mesh(tubeGeometry, material);

  sphere.add(tube);
}

export default AddFlyLine;
