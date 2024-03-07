import { Context } from '../App'
import Frere from './Frere'
import { useContext } from "react"

function Pere() {

  const prenomP = useContext(Context).prenom

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
