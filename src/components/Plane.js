import { usePlane } from "@react-three/cannon";

function Plane(props) {
    const [ref] = usePlane(() => ({position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0]}));

    return (
      <mesh ref = {ref} >
        <planeBufferGeometry attach="geometry" args={[10, 10]} />
        <meshLambertMaterial attach="material" color="orange" />
      </mesh>
    );
  }
export default Plane;