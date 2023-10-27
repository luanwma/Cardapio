import "./card.css"

/*
 aqui é criado o modelo html de cada card
 e também as propriedades que serão passadas para ele, por exemplo interface title, price image são as propriedades
 import React from "react";  // para usar componentes do react no typescript
 a função exportada Card recebe paramentros como props é por esse parametro que são passados os dados
 da api e renderiza as informações, porém aqui props é desestruturado em title, image e price que são os dados
 enviados da api, não sei se a ordem dos fatores na função card tem que ser a mesma ordem em que são enviadas
 mas em App, estou enviado <Card na sequencia title, image, price, vou tentar manter essa ordem



*/


interface CardProps{
    title : string,
    image:string,
    price:number,
    
}

export function Card({title, image, price} : CardProps){
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={image}/>
            
            <p><b>Valor:</b> {price}</p>
        </div>

    )
}