import * as THREE from "three";
import lon2xyz from "../../utils/lon2xyz";
import TradePointsMap from "../../assets/json/TradePoints.json";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import FontJson from "../../assets/fonts/font.json";

function PlaceName({
  sphere,
  earthRadius
}: {
  sphere: THREE.Mesh;
  earthRadius: number;
}) {

  const loader = new FontLoader();
  const font = loader.parse(FontJson);
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  TradePointsMap.features.forEach((feature) => {
    const [longitude, latitude] = feature.geometry.coordinates;
    const { x, y, z } = lon2xyz(earthRadius, longitude, latitude);
    const normalizedPosition = new THREE.Vector3(x, y, z).normalize();
    const surfacePosition = normalizedPosition.multiplyScalar(earthRadius + 0.01);

    const text = feature.properties.name;
    let offsetX = 0;
    
    for (const char of text) {
      const textGeo = new TextGeometry(char, {
        font: font,
        size: 0.05,
        height: 0.005,
      });
      
      const textMesh = new THREE.Mesh(textGeo, textMaterial);
      
      textGeo.computeBoundingBox();
      const width = textGeo.boundingBox!.max.x - textGeo.boundingBox!.min.x;
    
      textMesh.position.set(
        surfacePosition.x + offsetX,
        surfacePosition.y,
        surfacePosition.z
      );
      textMesh.position.y -= 0.02;
      textMesh.scale.x *= -1;
      textMesh.lookAt(new THREE.Vector3(0, 0, 0));
      
      sphere.add(textMesh);
    
      offsetX += width + 0.01;
    }
  });
}

export default PlaceName;
