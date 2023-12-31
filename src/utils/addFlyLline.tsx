import * as THREE from "three";

function AddFlyLine(
  sphere: THREE.Mesh,
  start: THREE.Vector3,
  end: THREE.Vector3,
  height: number,
  color?: string,
  thickness?: number
) {

  const middle = new THREE.Vector3().lerpVectors(start, end, 0.5).setY(height);

  const curve = new THREE.CubicBezierCurve3(start, start, middle, end);

  const tubeGeometry = new THREE.TubeGeometry(
    curve,
    30,
    thickness || 0.1,
    3,
    false
  );
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 1,
  });
  const tube = new THREE.Mesh(tubeGeometry, material);

  const points = curve.getPoints(10);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const pointMaterial = new THREE.PointsMaterial({
    color,
    transparent: true,
    opacity: 1,
    size: 0.02,
  });
  const particles = new THREE.Points(geometry, pointMaterial);

  sphere.add(tube);
  sphere.add(particles);

  return { tube, particles };

}

export default AddFlyLine;
