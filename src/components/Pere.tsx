import Frere from './Frere'

function Pere(props : {prenomP : string, onNameChange: (prenom: string) => void}) {

  return (
    <>
        <div className="Pere">
          <h2>Pere: {props.prenomP}</h2>
          
          <Frere prenomF={props.prenomP} onNameChange={props.onNameChange}/>
        </div>
    </>
  )
}

export default Pere
