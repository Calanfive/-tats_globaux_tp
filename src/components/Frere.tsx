import { useCallback, useContext } from "react";
import { Context } from "../App";

function Frere() {

  const prenomF = useContext(Context).prenom
  const setPrenom = useContext(Context).setPrenom

    const handleclick = useCallback(
        () => {
          setPrenom('Bobby')
        } ,[setPrenom]
    );

        return (
          <>
              <div className="Frere">
                <h2>Frere: {prenomF}</h2>
                <button onClick={handleclick}>Nouveau prénom</button>
              </div>
          </>
        )
      }

export default Frere
