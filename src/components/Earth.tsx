import * as THREE from "three";
import { useEffect, useRef } from "react";
import globe from "../assets/img/globe.jpg";

function Earth() {
  const earthRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    if (earthRef.current) {
      earthRef.current.appendChild(renderer.domElement);
    }

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 100, 100),
      new THREE.MeshBasicMaterial({
        // color: 0xffff00,
        map: new THREE.TextureLoader().load(globe),
      })
    );

    scene.add(sphere);

    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
    return () => {
      if (earthRef.current && renderer.domElement) {
        earthRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <section ref={earthRef}></section>;
}

export default Earth;
