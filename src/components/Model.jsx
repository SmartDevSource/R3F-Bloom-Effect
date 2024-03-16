import { useGLTF } from '@react-three/drei'
import { Bloom, EffectComposer, Selection } from '@react-three/postprocessing'
import { useEffect, useRef, useState } from 'react'
import { RigidBody } from '@react-three/rapier'

export const Model = ({ path, position, bloomColor = null, type }) => {
    const gltf = useGLTF(path)

    const modifyMaterials = (object) => {
        if (object.material) {
            object.material.emissive.set(bloomColor)
            object.material.emissiveIntensity = 5
            object.material.toneMapped = false
        }
        if (object.children) {
        object.children.forEach(modifyMaterials)
        }
    }

    useEffect(() => {
        if (bloomColor)
            modifyMaterials(gltf.scene)
    }, [gltf])

 return (
    <RigidBody position={position} type={type}>
        <EffectComposer autoClear={false} >
            <pointLight intensity={.5} />
            <Bloom luminanceThreshold={1} luminanceSmoothing={20} height={300} />
            <Selection>
                <primitive object={gltf.scene} />
            </Selection>
        </EffectComposer>
    </RigidBody>
    )
}
