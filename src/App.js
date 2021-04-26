import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from "./components/Cube";
import Plane from "./components/Plane";
import "./css/App.css";


function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity = {0.7} />
      <spotLight position = {[10,15,10]} angle = {0.2} />
      <Stars />
      <Plane />
      <Cube />
    </Canvas>
  );
}

export default App;
