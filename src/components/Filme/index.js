import "./Filme.css";

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

export default function Filme() {
  return (
    <div className="container text-center">
      <div class="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-outline-light me-2">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}