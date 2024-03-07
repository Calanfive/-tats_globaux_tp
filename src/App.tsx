import { useState, createContext } from 'react'
import './App.css'
import ArriereGrandPere from './components/ArriereGrandPere'

export const Context = createContext<{
  prenom : string,
  setPrenom: (prenom : string) => void
}>({
  prenom: "",
  setPrenom: () => {}
})

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [prenomDeLaFamille, setPrenomDeLaFamille] = useState<string>('Geoffroy')

  return (
    <>
      <Context.Provider value={{prenom: prenomDeLaFamille, setPrenom: setPrenomDeLaFamille}}>
        <h1> Arrière Grand Père : {prenomDeLaFamille}</h1>
        <ArriereGrandPere/>
      </Context.Provider>
    </>
  )
}

export default App
