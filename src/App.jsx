import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { Physics } from '@react-three/rapier'
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"

function App() {
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 30 }}>
      <OrbitControls />
      <Suspense>
        <Physics gravity={[0, -9.81, 0]}>
          <Experience />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App