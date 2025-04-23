// function PlayerModel({ nodes, materials, scale, position, rotation, group }) {
// 	return (
// 		<group
// 			dispose={null}
// 			scale={scale}
// 			position={position}
// 			ref={group}
// 			rotation={rotation}
// 		>
// 			<group>
// 				<primitive object={nodes.Hips} />
// 				<skinnedMesh
// 					frustumCulled={false}
// 					geometry={nodes.Wolf3D_Body.geometry}
// 					material={materials.Wolf3D_Body}
// 					skeleton={nodes.Wolf3D_Body.skeleton}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
// 					material={materials.Wolf3D_Outfit_Bottom}
// 					skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
// 					material={materials.Wolf3D_Outfit_Footwear}
// 					skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					geometry={nodes.Wolf3D_Outfit_Top.geometry}
// 					material={materials.Wolf3D_Outfit_Top}
// 					skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					geometry={nodes.Wolf3D_Hair.geometry}
// 					material={materials.Wolf3D_Hair}
// 					skeleton={nodes.Wolf3D_Hair.skeleton}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					name="EyeLeft"
// 					geometry={nodes.EyeLeft.geometry}
// 					material={materials.Wolf3D_Eye}
// 					skeleton={nodes.EyeLeft.skeleton}
// 					morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
// 					morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					name="EyeRight"
// 					geometry={nodes.EyeRight.geometry}
// 					material={materials.Wolf3D_Eye}
// 					skeleton={nodes.EyeRight.skeleton}
// 					morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
// 					morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					name="Wolf3D_Head"
// 					geometry={nodes.Wolf3D_Head.geometry}
// 					material={materials.Wolf3D_Skin}
// 					skeleton={nodes.Wolf3D_Head.skeleton}
// 					morphTargetDictionary={
// 						nodes.Wolf3D_Head.morphTargetDictionary
// 					}
// 					morphTargetInfluences={
// 						nodes.Wolf3D_Head.morphTargetInfluences
// 					}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					name="Wolf3D_Teeth"
// 					geometry={nodes.Wolf3D_Teeth.geometry}
// 					material={materials.Wolf3D_Teeth}
// 					skeleton={nodes.Wolf3D_Teeth.skeleton}
// 					morphTargetDictionary={
// 						nodes.Wolf3D_Teeth.morphTargetDictionary
// 					}
// 					morphTargetInfluences={
// 						nodes.Wolf3D_Teeth.morphTargetInfluences
// 					}
// 				/>
// 			</group>
// 		</group>
// 	);
// }

// export default PlayerModel;













import React from 'react';
import * as THREE from 'three'; // Ensure you have THREE.js imported

function PlayerModel({ nodes, materials, scale, position, rotation, group }) {
  // Change colors for the body, outfit, hair, and eyes
  const updatedOutfitMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Blue outfit
  const updatedHairMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Brown hair
  const updatedEyeMaterial = new THREE.MeshStandardMaterial({ color: 0x2a2a2a }); // Dark eye color
  const updatedBodyMaterial = new THREE.MeshStandardMaterial({ color: 0xffd700 }); // Gold body color

  return (
    <group
      dispose={null}
      scale={scale}
      position={position}
      ref={group}
      rotation={rotation}
    >
      <group>
        <primitive object={nodes.Hips} />
        
        {/* Body with gold color */}
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Body.geometry}
          material={updatedBodyMaterial} // Gold color for body
          skeleton={nodes.Wolf3D_Body.skeleton}
        />

        {/* Outfit (blue color) */}
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={updatedOutfitMaterial} // Blue outfit
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={updatedOutfitMaterial} // Blue footwear
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={updatedOutfitMaterial} // Blue top
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />

        {/* Hair (brown color) */}
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Hair.geometry}
          material={updatedHairMaterial} // Brown color for hair
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />

        {/* Eyes (dark color) */}
        <skinnedMesh
          frustumCulled={false}
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={updatedEyeMaterial} // Dark color for left eye
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={updatedEyeMaterial} // Dark color for right eye
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />

        {/* Head with skin color */}
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin} // Default skin color
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />

        {/* Teeth */}
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth} // Default material for teeth
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

export default PlayerModel;
