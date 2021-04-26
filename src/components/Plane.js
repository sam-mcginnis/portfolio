function Plane(props) {
    
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshLambertMaterial attach="material" color="orange" />
      </mesh>
    );
  }
export default Plane;