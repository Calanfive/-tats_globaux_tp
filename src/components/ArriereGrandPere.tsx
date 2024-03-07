import { Context } from '../App'
import GrandPere from './GrandPere'
import { useContext } from "react"

function ArriereGrandPere() {

  const prenomDeLaFamille = useContext(Context)

  return (
    <>
        <div className="ArriereGrandPere">
          <h2>ArriereGrandPere: {prenomDeLaFamille}</h2>
          <GrandPere />
        </div>
    </>
  )
}

export default ArriereGrandPere