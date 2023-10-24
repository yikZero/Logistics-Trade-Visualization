import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import earthTexture from "../assets/img/globe.jpg";

import ChinaMap from "./map/ChinaMap";

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
    sphere.rotation.set(0.5, 3.1, 0.1); // 中国所在位置 0.5, 2.9, 0.1
    scene.add(sphere);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      sphere.rotation.y += 0.0001;
    }

    ChinaMap({ sphere, earthRadius });

    animate();
    return () => {
      if (earthRef.current && renderer.domElement) {
        earthRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="absolute left-12 -bottom-32" ref={earthRef}></section>
  );
}

export default Earth;
