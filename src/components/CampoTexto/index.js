import "./CampoTxt.css"

const CampoTxt = (props) =>{

    const Digitado = (event) =>{
        props.aoDigitar(event.target.value)

    } 


    return(
        <div className="txt">

            <label>{props.label}</label>
           
            <input
                onChange={Digitado}
                placeholder={props.placeholder}
                value={props.valor}
            >
            
            </input>
        </div>
    )
}

export default CampoTxt