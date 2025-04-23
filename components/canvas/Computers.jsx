// import {
//   Preload,
//   useGLTF,
//   OrbitControls,
//   PerspectiveCamera,
// } from "@react-three/drei";
// import * as THREE from "three";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";

// import CanvasLoader from "../Loader";
// import ComputerModel from "./models/ComputerModel";

// function Computers({ isMobile }) {
//   const { nodes, materials } = useGLTF("/models/desktop_pc/scene.gltf");

//   return (
//     <>
//       <hemisphereLight intensity={1} groundColor="black" />
//       <ambientLight intensity={0.65} />
//       <spotLight intensity={1} position={[0, 1.5, 0.7]} angle={0.12} />
//       <PerspectiveCamera makeDefault position={[0, 0, -8]} fov={30} />
//       <pointLight intensity={2} position={[1, 1.3, 0]} color={"#804dee"} />
//       <pointLight intensity={2} position={[-1, 1.3, 1]} color={"#804dee"} />
//       <OrbitControls
//         enableZoom={false}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//         enableDamping={true}
//         dampingFactor={0.05}
//         enablePan={false}
//         autoRotateSpeed={4}
//         autoRotate={isMobile && true}
//         makeDefault
//       />
//       <ComputerModel
//         nodes={nodes}
//         materials={materials}
//         scale={isMobile ? 0.45 : 0.35}
//         position={isMobile ? [-0.75, -0.7, 0] : [-0.5, -0.5, 0]}
//         rotation={[-0.01, 1.6, -0.1]}
//       />
//     </>
//   );
// }

// function ComputersCanvas({ isMobile }) {
//   return (
//     <Canvas
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{
//         outputColorSpace: THREE.SRGBColorSpace,
//         alpha: true,
//       }}
//       className="cursor-pointer"
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <Computers isMobile={isMobile} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// }

// export default ComputersCanvas;













// Components/ComputersCanvas.jsx

// import {
//   Preload,
//   useGLTF,
//   OrbitControls,
//   PerspectiveCamera,
//   Float,
//   ContactShadows,
//   Environment,
// } from "@react-three/drei";
// import * as THREE from "three";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import CanvasLoader from "../Loader";
// import ComputerModel from "./models/ComputerModel";

// function Computers({ isMobile }) {
//   const { nodes, materials } = useGLTF("/models/desktop_pc/scene.gltf");

//   return (
//     <>
//       {/* Lights */}
//       <ambientLight intensity={0.3} />
//       <hemisphereLight intensity={0.7} groundColor="black" />
//       <spotLight
//         position={[0, 5, 2]}
//         angle={0.25}
//         penumbra={1}
//         intensity={1.2}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight position={[2, 3, 1]} intensity={1.5} color="#ffffff" />
//       <pointLight position={[-2, 2, 1]} intensity={1.2} color="#804dee" />

//       {/* Camera */}
//       <PerspectiveCamera makeDefault position={[0, 0, -6]} fov={30} />

//       {/* Floating model */}
//       <Float
//         speed={1.5}
//         rotationIntensity={1}
//         floatIntensity={1.2}
//         floatingRange={[0.2, 0.4]}
//       >
//         <ComputerModel
//           nodes={nodes}
//           materials={materials}
//           scale={isMobile ? 0.45 : 0.35}
//           position={isMobile ? [-0.75, -0.7, 0] : [-0.5, -0.5, 0]}
//           rotation={[-0.01, 1.6, -0.1]}
//         />
//       </Float>

//       {/* Ground shadow */}
//       <ContactShadows
//         position={[0, -1.4, 0]}
//         opacity={0.5}
//         scale={10}
//         blur={2}
//         far={4}
//       />

//       {/* Optional background environment */}
//       <Environment preset="city" />

//       {/* Controls */}
//       <OrbitControls
//         enableZoom={false}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//         enableDamping
//         dampingFactor={0.1}
//         enablePan={false}
//         autoRotate={isMobile}
//         autoRotateSpeed={3}
//       />
//     </>
//   );
// }

// function ComputersCanvas({ isMobile }) {
//   return (
//     <Canvas
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [3, 2, 5], fov: 25 }}
//       gl={{
//         outputColorSpace: THREE.SRGBColorSpace,
//         alpha: true,
//       }}
//       className="cursor-pointer"
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <Computers isMobile={isMobile} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// }

// export default ComputersCanvas;
















import {
  Preload,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Float,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import CanvasLoader from "../Loader";

function ComputerModel({ isMobile }) {
  const { scene } = useGLTF("/models/desktop_pc/scene.gltf");





  
  return (
    <group>
      {/* Smaller Desk */}
      <mesh receiveShadow position={[0, -1.1, 0]}>
        <boxGeometry args={[2.5, 0.2, 1.2]} />
        <meshStandardMaterial color="#3b2f2f" />
      </mesh>

      {/* PC Model */}
      <primitive
        object={scene}
        scale={isMobile ? 0.45 : 0.35}
        position={isMobile ? [-0.5, -0.9, 0] : [-0.3, -0.85, 0]}
        rotation={[-0.01, 1.6, -0.1]}
        castShadow
      />
    </group>
  );
}

function Computers({ isMobile }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[5, 10, 5]}
        angle={0.3}
        penumbra={0.5}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[0, 3, 2]} intensity={1} color="#00ffff" />
      <pointLight position={[-2, 3, 1]} intensity={1} color="#ff00ff" />

      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={30} />

      {/* Floating Model */}
      <Float
        speed={1}
        rotationIntensity={0}
        floatIntensity={0.4}
        floatingRange={[0.05, 0.15]}
      >
        <ComputerModel isMobile={isMobile} />
      </Float>

      {/* Ground Shadows */}
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.45}
        scale={8}
        blur={2.5}
        far={4}
      />

      {/* Sky / Environment */}
      <Environment preset="city" />

      {/* Manual Orbit Controls Only */}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableDamping
        dampingFactor={0.05}
        enablePan={false}
        autoRotate={false} // ✅ Removed auto-rotation
      />
    </>
  );
}

function ComputersCanvas({ isMobile }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [3, 2, 5], fov: 25 }}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
      }}
      className="cursor-pointer"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;
