import * as THREE from "three";
import { useEffect, useRef } from "react";
import earthTexture from "../assets/img/globe-dark.jpg";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import ChinaMap from "./map/ChinaMap";
import MaritimeSilkRoad from "./map/MaritimeSilkRoad";
import LandSilkRoad from "./map/LandSilkRoad";

function Earth() {
  const earthRef = useRef<HTMLDivElement | null>(null);
  const earthRadius = 6;

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 1000);
    camera.position.set(0, 0, 10); // 相机位置

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(innerWidth * 0.65, innerWidth * 0.65);
    renderer.setPixelRatio(window.devicePixelRatio);
    if (earthRef.current) {
      earthRef.current.appendChild(renderer.domElement);
    }

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(earthRadius, 100, 100),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(earthTexture),
        transparent: true,
        opacity: 1,
      })
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 2;

    controls.addEventListener("change", () => {
      renderer.render(scene, camera);
    });

    sphere.rotation.set(0.5, 3.1, 0.1); // 中国所在位置 0.5, 2.9, 0.1
    scene.add(sphere);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      sphere.rotation.y += 0.0001;
    }

    ChinaMap({ sphere, earthRadius, color: "#ffff00" });
    MaritimeSilkRoad({ sphere, earthRadius, color: "#0092FA" });
    LandSilkRoad({ sphere, earthRadius });

    animate();
    return () => {
      controls.dispose();
      if (earthRef.current && renderer.domElement) {
        earthRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="absolute left-12 -bottom-48" ref={earthRef}></section>
  );
}

export default Earth;
