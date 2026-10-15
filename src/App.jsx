import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cabecalho from './componentes/Cabecalho'
import CardCurso from './componentes/CardCurso'
import Destaque from './componentes/Destaque'
import Rodape from './componentes/Rodape'


const cursos = [
  {
    nome: "HTML e CSS",
    duracao: "20 horas",
    modalidade: "Presencial",
    nivel: "Iniciante",
    vagas: 25
  },
  {
    nome: "JavaScript",
    duracao: "40 horas",
    modalidade: "Online",
    nivel: "Intermediário",
    vagas: 20
  },

   {
    nome: "Python",
    duracao: "30 horas",
    modalidade: "Presencial",
    nivel: "Iniciante",
    vagas: 30
  },

    {
    nome: "Banco de Dados SQL",
    duracao: "25 horas",
    modalidade: "Híbrido",
    nivel: "Intermediário",
    vagas: 30
  },

  {
    nome: "React.js",
    duracao: "50 horas",
    modalidade: "Online",
    nivel: "Avançado",
    vagas: 15
  }

];



function App() {
  return (
    <>
    <Cabecalho/>
      {
        cursos.map((e) => {
          return <CardCurso nome={e.nome} duracao={e.duracao} modalidade={e.modalidade} nivel={e.nivel} vagas={e.vagas} />
        })
      }
      <br /><br />
      <Rodape/>
    </>
  )
}

export default App
