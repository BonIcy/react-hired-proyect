
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import logia from './assets/images/logia.jpg';
import paramecia from './assets/images/paramecia.png';
import zoan from './assets/images/zoan.png';
import { Link } from 'react-router-dom'; 

let content = [
  {
    title: 'Logia',
    image: logia,
    description:
      'Las frutas Logia permiten al consumidor convertirse en un elemento natural, otorgando habilidades únicas y poderosas.',
      link1: 'https://onepiece.fandom.com/es/wiki/Categor%C3%ADa:Consumidores_de_frutas_del_diablo_tipo_logia',
      link2: 'https://onepiece.fandom.com/es/wiki/Fruta_del_diablo/Logia',
  },
  {
    title: 'Paramecia',
    image: paramecia,
    description:
      'Las frutas Paramecia otorgan habilidades variadas y a menudo extrañas, como la habilidad de estirar el cuerpo o controlar objetos.',
      link1: 'https://onepiece.fandom.com/es/wiki/Categor%C3%ADa:Consumidores_de_frutas_del_diablo_tipo_paramecia',
      link2: 'https://onepiece.fandom.com/es/wiki/Fruta_del_diablo/Paramecia',
  },
  {
    title: 'Zoan',
    image: zoan,
    description:
      'Las frutas Zoan permiten a los consumidores transformarse en un animal o una combinación de animal y humano.',
      link1: 'https://onepiece.fandom.com/es/wiki/Categor%C3%ADa:Consumidores_de_frutas_del_diablo_tipo_zoan',
      link2: 'https://onepiece.fandom.com/es/wiki/Fruta_del_diablo/Zoan',
  },
];


function App() {
  return (
    <div>
      <Header />
      <ul id="content">
        <Content
          image={content[0].image}
          title={content[0].title}
          description={content[0].description}
          link1={content[0].link1}
          link2={content[0].link2}
        />
        <Content
          image={content[1].image}
          title={content[1].title}
          description={content[1].description}
          link1={content[1].link1}
          link2={content[1].link2}
        />
        <Content
          image={content[2].image}
          title={content[2].title}
          description={content[2].description}
          link1={content[2].link1}
          link2={content[2].link2}
        />
      </ul>
    </div>
  );
}

export default App;