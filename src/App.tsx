import { useState } from 'react'
import './App.css'
import ArriereGrandPere from './components/ArriereGrandPere'

function App() {
  const [prenomDeLaFamille, setPrenomDeLaFamille] = useState<string>('Geoffroy')
  
  const handleChangeNewName = (newName : string) => {
    setPrenomDeLaFamille(newName)
  };

  return (
    <>
      <div>
        <ArriereGrandPere prenomARGP={prenomDeLaFamille} onNameChange={handleChangeNewName} />
      </div>
    </>
  )
}

export default App
