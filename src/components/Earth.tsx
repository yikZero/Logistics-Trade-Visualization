import * as THREE from "three";
import { useEffect, useRef } from "react";
import earthTexture from "../assets/img/globe-dark.jpg";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import ChinaMap from "./map/ChinaMap";
import MaritimeSilkRoad from "./map/MaritimeSilkRoad";
import LandSilkRoad from "./map/LandSilkRoad";
import TradePoints from "./map/TradePoints";
import PlaceName from "./map/PlaceName";

function Earth() {

  const sphereRef = useRef<THREE.Mesh | null>(null);

  const earthRef = useRef<HTMLDivElement | null>(null);
  const earthRadius = 5;

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 1000);
    camera.position.set(0, 0, 10); // 相机位置

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(innerWidth * 0.9, innerWidth * 0.9);
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
    sphereRef.current = sphere;

    const transparentSphere = new THREE.Mesh(
      new THREE.SphereGeometry(earthRadius, 100, 100),
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
      })
    );
    transparentSphere.rotation.set(0.5, 3.1, 0.1);
    transparentSphere.scale.set(1.001, 1.001, 1.001);

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

    scene.add(transparentSphere);
    scene.add(sphere);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      sphere.rotation.y += 0.0001;
      transparentSphere.rotation.y += 0.0001;
    }

    PlaceName({sphere: transparentSphere, earthRadius });
    ChinaMap({ sphere: transparentSphere, earthRadius, color: "#7D7F87" }); // 中国地图区域
    MaritimeSilkRoad({
      sphere: transparentSphere,
      earthRadius,
      color: "#007ED8",
    }); // 水上丝绸之路
    LandSilkRoad({ sphere: transparentSphere, earthRadius, color: "#F59400" }); // 陆上丝绸之路
    TradePoints({ sphere: transparentSphere, earthRadius, color: "#169BFA" });
    // renderFlyLines(sphere, selectedCountry);

    // FlyLine({ sphere: transparentSphere, earthRadius }); // 飞线渲染

    animate();

    const handleResize = () => {
      const maxWidth = 1600;
      const newWidth = Math.min(innerWidth * 0.8, maxWidth);
      const newHeight = Math.min(innerWidth * 0.8, maxWidth);

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.render(scene, camera);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      controls.dispose();
      if (earthRef.current && renderer.domElement) {
        earthRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="absolute -left-32 -bottom-96 2xl:-bottom-[480px]"
      ref={earthRef}
    >
    </section>
  );
}

export default Earth;
