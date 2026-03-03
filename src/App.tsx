import Beams from './components/Beams'
import './App.css'

function App() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={12}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={0}
      />
    </div>
  )
}

export default App
