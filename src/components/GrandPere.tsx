import { useRecoilValue } from 'recoil'
import { familyNameState } from '../atoms/familyatom'
import Pere from './Pere'

function GrandPere() {

  const prenomGP = useRecoilValue(familyNameState)

  return (
    <>
        <div className="GrandPere">
          <h2> GrandPere: {prenomGP} </h2>
          <Pere />

        </div>
    </>
  )
}

export default GrandPere
