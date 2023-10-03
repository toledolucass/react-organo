import Banner from './components/Banner/Banner'
import CampoTexto from './components/CampoTexto/CampoTexto'

function App() {
  return (
    <>
      <div>
        <Banner/>
        <CampoTexto label="Nome" placeholder="Digite seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Endereço da imagem"/>
      </div>
    </>
  )
}

export default App
