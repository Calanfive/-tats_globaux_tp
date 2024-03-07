import Pere from './Pere'

function GrandPere(props: { prenomGP:string, onNameChange: (prenom: string) => void }) {

  return (
    <>
        <div className="GrandPere">
          <h2> GrandPere: {props.prenomGP} </h2>
          <Pere prenomP={props.prenomGP} onNameChange={props.onNameChange}/>

        </div>
    </>
  )
}

export default GrandPere