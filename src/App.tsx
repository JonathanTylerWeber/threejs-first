import { useEffect, useRef } from "react";
import * as THREE from "three";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const sizes = { width: 800, height: 600 };

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);

    renderer.render(scene, camera);
  }, []);

  return <canvas ref={canvasRef} />;
}

export default App;
