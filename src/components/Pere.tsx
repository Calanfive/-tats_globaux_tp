import { useRecoilValue } from 'recoil'
import { familyNameState } from '../atoms/familyatom'
import Frere from './Frere'

function Pere() {

  const prenomP = useRecoilValue(familyNameState)

  return (
    <>
        <div className="Pere">
          <h2>Pere: {prenomP}</h2>
          <Frere/>
        </div>
    </>
  )
}

export default Pere
