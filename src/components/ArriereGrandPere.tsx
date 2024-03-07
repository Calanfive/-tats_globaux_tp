import GrandPere from './GrandPere'

function ArriereGrandPere(props: {prenomARGP: string, onNameChange: (prenom: string) => void}) {

  return (
    <>
        <div className="ArriereGrandPere">
          <h2>ArriereGrandPere: {props.prenomARGP}</h2>
          <GrandPere prenomGP={props.prenomARGP} onNameChange={props.onNameChange}/>
        </div>
    </>
  )
}

export default ArriereGrandPere