import { Box } from "@react-three/drei"
import { RigidBody } from '@react-three/rapier'

import { Model } from "./Model"

export const Experience = () => {

  return (
    <>
      {/* <ambientLight intensity={.5}/> */}
      <directionalLight position={[0, 10, 5]} intensity={.5}/>

      <Model path="laser.glb" position={[0, 1.55, 0]} bloomColor = "yellow" type="dynamic"/>

      <RigidBody position={[1, 5, 1]} scale={[.3, .3, .3]}>
        <Box>
          <meshStandardMaterial color = "royalblue"/>
        </Box>
      </RigidBody>
      <RigidBody position={[-1.5, 5, 1]} scale={[.3, .3, .3]}>
        <Box>
          <meshStandardMaterial color = "royalblue"/>
        </Box>
      </RigidBody>
      <RigidBody position={[-1.6, 5, -1]} scale={[.3, .3, .3]}>
        <Box>
          <meshStandardMaterial color = "royalblue"/>
        </Box>
      </RigidBody>

      <RigidBody type="fixed">
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color = "springgreen"/>
        </Box>
      </RigidBody>
    </>
  )
}