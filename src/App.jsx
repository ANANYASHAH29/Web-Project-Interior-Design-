import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Components/Experience";
import "./App.css";

function App() {
  const [currentModel, setCurrentModel] = useState("myhomeOne.glb");

  const floorModels = {
    "floor1.jpg": "myhomeFinalthisOne.glb",
    "floor2.jpeg": "myhomeFinalthisTwo.glb",
    "floor4.jpeg": "myhomeFinalthisThree.glb",
    "floor5.jpeg": "myhomeFinalFour.glb",
  };

  return (
    <div className="app-container">
      {/* 🔹 Floor Selection Bar */}
      
      <div className="floor-selection-bar">
      <h2>Floor Textures:</h2>&nbsp;&nbsp;&nbsp;&nbsp;
        {Object.keys(floorModels).map((floorImage) => (
          <img
            key={floorImage}
            src={`/${floorImage}`} // ✅ Ensure images are in `public/`
            alt="Floor"
            className="floor-image"
            onClick={() => setCurrentModel(floorModels[floorImage])} // ✅ Clicking updates the model
          />
        ))}&nbsp;&nbsp;
      </div>

      {/* 🔹 3D Model Viewer */}
      <Canvas className="canvas-container" camera={{ position: [0, 2, 5], fov: 50 }} >
        <color attach="background" args={["#001f3f"]} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 0]} intensity={1} />
        <Experience modelPath={`/models/${currentModel}`} /> {/* ✅ Pass selected model */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

export default App;
