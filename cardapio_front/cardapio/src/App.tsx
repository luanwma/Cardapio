import { useState } from 'react'
import {Card} from './components/card/card'
import { FoodData } from './interface/FoodData';
import {CreateModal} from './components/create-modal/create-modal'
import './App.css';
import { useFoodData } from './hooks/useFoodData';



function App() {

  /* cria uma tipo uma interface FoodData que tem o modelo de dados que vem do backend, no caso, 
  um modelo com id numero, title string, image string com o link da imagem e price number 
  com essa interface criada, crie um array sendo uma constante do tipo da interface criada 
  const data: FoodData[] = [] ou seja um array de FoodData um array com os dados retornados da api
  para adicionar os itens ao cardapio basta usar a função map passando como parametro uma arrow function
  com uma variavel foodData => <Card onde é enviado os dados para colocar em cada card e ficar no shape 
  de card 

  */
  //const data: FoodData[] = []; o ponto de interrogação é colocado para mostrar que data
  // pode ser undefined
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () =>{
    setIsModalOpen(prev => !prev)
  }
  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className='card-grid'>
        {data?.map(foodData => <Card 
          title = {foodData.title} 
          image = {foodData.image} 
          price = {foodData.price}
        />)}
        


      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
      
  )
}

export default App
