import GrandPere from './GrandPere'
import { useRecoilValue } from "recoil";
import { familyNameState } from "../atoms/familyatom";

function ArriereGrandPere() {

  const prenomARGP = useRecoilValue(familyNameState);

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