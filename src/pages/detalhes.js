import { useParams } from 'react-router-dom';
import "../components/estilos gerais/Geral.css";
const filmes = [{
    "nome": "Shrek",
    "duracao": "1H30",
    "foto": "shrek.jpg",
    "ano": 2001,
    "genero": "Ação/Obra prima",
    "descricao": "Filme mais bala sobre cebolas e burros",
    "nota": 5
},
{
    "nome": "Toy story",
    "duracao": "1H21",
    "foto": "toy.jpg",
    "ano": 1995,
    "genero": "Ação/Obra prima",
    "descricao": "Filme da Pixar sobre brinquedos",
    "nota": 5
},
{
    "nome": "A viagem de chihiro",
    "duracao": "2H05",
    "foto": "chihiro.jpg",
    "ano": 2001,
    "genero": "Ação/Nerd",
    "descricao": "Filme que te deixa pensando na existencia",
    "nota": 5
}
]

export default function Detalhes() {
    const { filme } = useParams();
    return (
        <div class="grande">
            <h1>Filme escolhido: {filme}!</h1><br></br>
            {(() => {
                if (filme == 'Shrek') {
                    return (
                        <div class="grande">
                            <p><h2>DESCRIÇÃO</h2>{filmes[0].descricao}</p>
                            <p><h2>GENERO</h2>{filmes[0].genero}</p>
                        </div>
                    )
                }
                else if (filme == 'Toy story') {
                    return (
                        <div class="grande">
                            <p><h2>DESCRIÇÃO</h2>{filmes[1].descricao}</p>
                            <p><h2>GENERO</h2>{filmes[1].genero}</p>
                        </div>
                    )
                }
                else if (filme == 'A viagem de chihiro') {
                    return (
                        <div class="grande">
                            <p><h2>DESCRIÇÃO</h2>{filmes[2].descricao}</p>
                            <p><h2>GENERO</h2>{filmes[2].genero}</p>
                        </div>
                    )
                }
            })()}
        </div>
    )
}