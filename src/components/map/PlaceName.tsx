import * as THREE from "three";
import lon2xyz from "../../utils/lon2xyz";
import TradePointsMap from "../../assets/json/TradePoints.json";

function PlaceName({
  sphere,
  earthRadius
}: {
  sphere: THREE.Mesh;
  earthRadius: number;
}) {

  TradePointsMap.features.forEach((feature) => {
    if (!feature.properties.isNameShow || feature.properties.isNameShow.toLowerCase() === 'false') return;
    const [longitude, latitude] = feature.geometry.coordinates;
    const { x, y, z } = lon2xyz(earthRadius, longitude, latitude);
    const normalizedPosition = new THREE.Vector3(x, y, z).normalize();
    const surfacePosition = normalizedPosition.multiplyScalar(earthRadius + 0.01);

    const text = feature.properties.name;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = text.length * 20;
    canvas.height = 20;

    if (context) {
      context.fillStyle = "rgba(0, 0, 0, 0)";
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Configure your text styles
      context.font = '10px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = '#ffffff';

      // Draw text on canvas
      context.fillText(text, canvas.width / 2, canvas.height / 2);

      // Create texture from canvas
      const texture = new THREE.CanvasTexture(canvas);

      // Create material using the texture
      const textMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true });

      // Create a plane geometry to host the texture
      const textGeometry = new THREE.PlaneGeometry(canvas.width / 100, canvas.height / 100);

      // Create mesh with the geometry and material
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      textMesh.position.set(surfacePosition.x, surfacePosition.y, surfacePosition.z);
      textMesh.lookAt(new THREE.Vector3(0, 0, 0));
      textMesh.scale.x *= -1;
      sphere.add(textMesh);
    }
  });
}

export default PlaceName;
