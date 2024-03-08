import { useCallback } from "react";
import { useFamilyStore } from "../App";

function Frere() {

  // autre façon écriture
  // const { prenom, setPrenom } = useFamilyStore()
  // const [newPrenom, setNewPrenom] = useState(prenom)

  const prenomF = useFamilyStore().prenom
  const setPrenom = useFamilyStore().setPrenom

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
