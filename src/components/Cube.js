import { useBox } from "@react-three/cannon";
  
  function Cube() {
    const [ref, api] = useBox(() => ({mass: 1, position: [0, 1, 0]}));
    document.onkeydown= (e) =>{
      if (e.key == 'ArrowUp') {
        api.velocity.set(0, 0, -5);
    }
     if (e.key == 'ArrowDown') {
      api.velocity.set(0, 0, 5);
    }
     if (e.key == 'ArrowLeft') {
      api.velocity.set(-5, 0, 0);
    }
     if (e.key == 'ArrowRight') {
      api.velocity.set(5, 0, 0);
    }

    }
    return (
      <mesh ref = {ref} >
        <sphereBufferGeometry attach = "geometry" />
        <meshLambertMaterial attach = "material" color = "green" />
      </mesh>
    );
  }
  
  export default Cube; 
  