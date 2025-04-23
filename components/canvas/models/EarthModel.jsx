// function EarthModel({ nodes, materials, scale, position, earthRef }) {
// 	return (
// 		<group dispose={null} scale={scale} position={position} ref={earthRef}>
// 			<group name="Sketchfab_Scene">
// 				<group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
// 					<group name="root">
// 						<group
// 							name="GLTF_SceneRootNode"
// 							rotation={[Math.PI / 2, 0, 0]}
// 						>
// 							<group name="Clouds_1">
// 								<mesh
// 									name="Object_4"
// 									geometry={nodes.Object_4.geometry}
// 									material={materials.Clouds}
// 								/>
// 							</group>
// 							<group name="Planet_2">
// 								<mesh
// 									name="Object_6"
// 									geometry={nodes.Object_6.geometry}
// 									material={materials.Planet}
// 								/>
// 							</group>
// 						</group>
// 					</group>
// 				</group>
// 			</group>
// 		</group>
// 	);
// }

// export default EarthModel;






import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial, AdditiveBlending } from "three";

function EarthModel({ nodes, materials, scale, position, earthRef }) {
	const planetRef = useRef();
	const cloudsRef = useRef();

	// Rotation animation
	useFrame(() => {
		if (planetRef.current) planetRef.current.rotation.y += 0.001;
		if (cloudsRef.current) cloudsRef.current.rotation.y += 0.0015;
	});

	return (
		<group dispose={null} scale={scale} position={position} ref={earthRef}>
			{/* Lighting */}
			<ambientLight intensity={0.3} />
			<directionalLight position={[5, 5, 5]} intensity={1} />

			{/* Atmosphere Glow */}
			<mesh scale={1.05}>
				<sphereGeometry args={[1, 64, 64]} />
				<meshBasicMaterial
					color="#3cf"
					transparent
					opacity={0.2}
					blending={AdditiveBlending}
					side={1}
				/>
			</mesh>

			{/* Earth Model */}
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
					<group name="root">
						<group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
							{/* Clouds */}
							<group name="Clouds_1" ref={cloudsRef}>
								<mesh
									name="Object_4"
									geometry={nodes.Object_4.geometry}
									material={materials.Clouds}
									material-transparent
									material-opacity={0.4}
								/>
							</group>

							{/* Earth */}
							<group name="Planet_2" ref={planetRef}>
								<mesh
									name="Object_6"
									geometry={nodes.Object_6.geometry}
									material={materials.Planet}
								/>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

export default EarthModel;
