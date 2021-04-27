import { usePlane } from "@react-three/cannon";

function Plane(props) {
    const [ref] = usePlane(() => ({position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0]}));

    return (
      <mesh ref = {ref} >
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshLambertMaterial attach="material" color="silver" />
      </mesh>
    );
  }
export default Plane;