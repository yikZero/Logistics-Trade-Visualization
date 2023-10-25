import * as THREE from "three";

function AddFlyLine(sphere: THREE.Mesh, start: THREE.Vector3, end: THREE.Vector3) {
  const curve = new THREE.CatmullRomCurve3([
    start,
    new THREE.Vector3().lerpVectors(start, end, 0.5).setY(5),
    end,
  ]);

  const geometry = new THREE.TubeGeometry(curve, 64, 0.05, 8, false);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

  const mesh = new THREE.Mesh(geometry, material);
  sphere.add(mesh);
}

export default AddFlyLine;
