import "./Botao.css"

export const Botao = (props) => {
    return (
        <div className='botao'>
          <button>
            {props.children}
          </button>
        </div>
    )
}