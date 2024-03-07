import { Context } from '../App'
import Frere from './Frere'
import { useContext } from "react"

function Pere() {

  const prenomDeLaFamille = useContext(Context)

  return (
    <>
        <div className="Pere">
          <h2>ArriereGrandPere: {prenomDeLaFamille}</h2>
          <Frere />
        </div>
    </>
  )
}

export default Pere
