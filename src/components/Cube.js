  function Cube() {
    return (
      <mesh position = {[0,2,0]}>
        <boxBufferGeometry attach = "geometry" />
        <meshLambertMaterial attach = "material" color = "green" />
      </mesh>
    );
  }
  
  export default Cube; 
  