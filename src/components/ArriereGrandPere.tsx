import { Context } from '../App'
import GrandPere from './GrandPere'
import { useContext } from "react"

function ArriereGrandPere() {

  const prenomARGP = useContext(Context).prenom

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