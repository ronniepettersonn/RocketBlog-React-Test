import './styles.css'

export function Contact() {
    return (
        <div className="containerForm">
            <div className="form">
                <h1>Contato</h1>
                <form className='contact'>
                    <input type="text" placeholder='Digite seu nome' />
                    <input type="text" placeholder='Digite seu e-mail' />
                    <input type="text" placeholder='Digite o assunto' />
                    <button>Enviar</button>
                </form>
            </div>
        </div>

    )
}