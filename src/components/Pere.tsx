import { useFamilyStore } from '../App'
import Frere from './Frere'

function Pere() {

  const prenomP = useFamilyStore().prenom

  return (
    <>
        <div className="Pere">
          <h2>ArriereGrandPere: {prenomP}</h2>
          <Frere />
        </div>
    </>
  )
}

export default Pere
