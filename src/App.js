import { Physics } from '@react-three/cannon';
import { Circle, OrbitControls, Sphere, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from "./components/Cube";
import Drone from "./components/Drone";
import Plane from "./components/Plane";
import "./css/App.css";


function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity = {0.7} />
      <spotLight position = {[10,15,10]} angle = {0.2} />
      <Stars />
      <Physics>
      <Plane />
      <Drone />
      </Physics>
    </Canvas>
  );
}

export default App;
