import { Context } from '../App'
import Pere from './Pere'
import { useContext } from "react"

function GrandPere() {

  const prenomDeLaFamille = useContext(Context)

  return (
    <>
        <div className="GrandPere">
          <h2>GrandPere: {prenomDeLaFamille}</h2>
          <Pere />
        </div>
    </>
  )
}

export default GrandPere