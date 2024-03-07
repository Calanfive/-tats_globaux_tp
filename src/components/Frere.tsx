import { useCallback } from "react";

function Frere(props : {prenomF : string, onNameChange: (prenom: string) => void }) {
    const handleclick = useCallback(
        () => {
            props.onNameChange('Cam');
        } ,[props.onNameChange]
    );

        return (
          <>
              <div className="Frere">
                <h2>Frere: {props.prenomF}</h2>
                <button onClick={handleclick}>Nouveau prénom</button>
              </div>
          </>
        )
      }

export default Frere
