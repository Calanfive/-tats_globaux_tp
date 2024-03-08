import { useFamilyStore } from '../App'
import GrandPere from './GrandPere'

function ArriereGrandPere() {

  const prenomARGP = useFamilyStore().prenom

  return (
    <>
        <div className="ArriereGrandPere">
          <h2>ArriereGrandPere: {prenomARGP}</h2>
          <GrandPere />
        </div>
    </>
  )
}

export default ArriereGrandPere