import { useFamilyStore } from '../App'
import Pere from './Pere'

function GrandPere() {

  const prenomGP = useFamilyStore().prenom

  return (
    <>
        <div className="GrandPere">
          <h2>GrandPere: {prenomGP}</h2>
          <Pere />
        </div>
    </>
  )
}

export default GrandPere