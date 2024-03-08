import { useCallback } from "react";
import { familyNameState } from "../atoms/familyatom";
import { useRecoilValue, useSetRecoilState } from "recoil";

function Frere() {

  const prenom = useRecoilValue(familyNameState)
  const setNewPrenom = useSetRecoilState(familyNameState)

    const handleclick = useCallback(
        () => {
          setNewPrenom('Cam');
        } ,[setNewPrenom]
    );

        return (
          <>
              <div className="Frere">
                <h2>Frere: {prenom}</h2>
                <button onClick={handleclick}>Nouveau prénom</button>
              </div>
          </>
        )
      }

export default Frere
