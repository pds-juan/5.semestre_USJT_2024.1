import React from 'react'
import Busca from './Busca'

// const App = () => {
class App extends React.Component {
    onBuscaRealizada = (termo) => {
        console.log(termo)
    }
    chave = 'H2nb4Aq3ZVjSNTnkanpQOWq5Ajqw1Ri7thHg53sSUZIVqkQFier7mSdp'
    render() {
        return (
            <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
                <div className='col-12'>
                    <h1>Exibir uma lista de...</h1>
                </div>
                <div className='col-8'>
                    <Busca
                        onBuscaRealizada={this.onBuscaRealizada}
                    />
                </div>
            </div>
        )
    }
}

export default App