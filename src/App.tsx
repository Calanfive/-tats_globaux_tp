import './App.css'
import { create } from 'zustand'
import ArriereGrandPere from './components/ArriereGrandPere'

interface Family {
  prenom : string,
  setPrenom: (newName : string) => void
}

export const useFamilyStore = create<Family>()((set) => ({
  prenom : "Geoffroy",
  setPrenom: (newName) => set((state) => ({ prenom: newName}))
}))

//   setPrenom: (newName) => set((state) => ({ prenom: state.prenom + newName}))
// state.qqch = ancien état (important pour incrémenter)

function App() {
  return (
    <>
      <div>
        <ArriereGrandPere/>
      </div>
    </>
  )
}

export default App
