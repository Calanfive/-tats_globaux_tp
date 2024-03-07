import { Context } from '../App'
import Pere from './Pere'
import { useContext } from "react"

function GrandPere() {

  const prenomGP = useContext(Context).prenom

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