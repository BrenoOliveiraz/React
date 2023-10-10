
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';



function App() {

  const [colaboradores, setColaboradores] = useState([])
  
  const colabAdd = (colaborador) =>{
    setColaboradores(... colaboradores, colaborador)
  }


  const cards = [

    {
      name: "Programação",
      firstColor: "#57C278",
      secondColor: "#D9F7E9",

    }, {
      name: "FrontEnd",
      firstColor: "#82CFFA",
      secondColor: "#E8F8FF",

    }, {
      name: "Data Science",
      firstColor: "#A6D157",
      secondColor: "#F0F8E2",

    }, {
      name: "DevOPS",
      firstColor: "#E06B69",
      secondColor: "#FDE7E8",

    }, {
      name: "UX e Design",
      firstColor: "#DB6EBF",
      secondColor: "#FAE9F5",

    }, {
      name: "Mobile",
      firstColor: "#FFBA05",
      secondColor: "#FFF5D9",

    }, {
      name: "Inovação e Gestão",
      firstColor: "#FF8A29",
      secondColor: "#FFEEDF",

    }

  ]


  return (
    <div className="App">
      <Banner />
      <Formulario colaboradorCadastrado = {colabAdd}
        times= {cards.map(card => card.name)}
        
      
      
      />
    </div>
  );
}

export default App;
