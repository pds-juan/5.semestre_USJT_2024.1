import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {

    const estilosBotao = {
        marginTop: 12,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: 'blueviolet',
        border: 'none',
        color: 'white',
        borderRadius: 8,
        width: '100%'
    }

    const textoRotulo = 'Nome:'

    // const textoBotao = () => 'Enviar' // resulta no mesmo que o seguinte
    const textoBotao = () => {
        return 'Enviar'; // nesse formato com a utilização de {chaves} é necessário o return
    }

    return (
        <div
            style={{
                margin: 'auto',
                width: 768,
                backgroundColor: '#EEE',
                padding: 12,
                borderRadius: 8
            }}>

            <label
                className='rotulo'
                htmlFor="nome">
                {textoRotulo}
            </label>

            <input
                type="text"
                id="nome"
                // maxLength={99} // para definir a quantidade máxima de caracteres
                style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    borderStyle: 'hidden',
                    outline: 'none',
                    borderRadius: 8,
                    width: '100%'
                }} />

            <button
                style={estilosBotao}>
                {textoBotao()}
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)