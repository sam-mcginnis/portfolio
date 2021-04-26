import { useBox } from "@react-three/cannon";
  function Move(api){
    
  }
  function Cube() {
    const [ref, api] = useBox(() => ({mass: 1, position: [0, 5, 0]}));
    return (
      <mesh ref = {ref} onClick = {() => {
        api.velocity.set(1,1,0);
      }} >
        <sphereBufferGeometry attach = "geometry" />
        <meshLambertMaterial attach = "material" color = "green" />
      </mesh>
    );
  }
  
  export default Cube; 
  