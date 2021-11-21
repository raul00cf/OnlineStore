import 'bootstrap/scss/bootstrap.scss'
import  {Wrapper} from './BuyProcess.styles'

import maskImage from "../../images/masc1.png"


function addCards() {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        src={maskImage} 
                        className="img-fluid rounded-start"
                        width={150}
                        height={150}
                        alt="ITEM SELECTED"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Máscara preta tecido</h5>
                        <p className="card-text">Mascara preta de tecido contra o COVID-19.</p>
                        <p className="card-text"><small className="text-muted">R$23,50</small></p>
                        <button type="button" class="btn btn-primary remove-btn-pos">Remover do Carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function count(boughtItemsNumber) {

    let code = []

    for(let i = 0 ; i < boughtItemsNumber; i++) {
      code[i] = addCards()     
    }

    return code
}

const BuyProcess = ({ boughtItemsNumber }) => (
    <>
     <Wrapper>
        <div>
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Carrinho</li>
                        <li className="breadcrumb-item"><a href="#">Pagamento</a></li>
                    </ol>
                </nav>
            </div>
            {count(boughtItemsNumber)}
        </div>
     </Wrapper>   
    </>
)

export default BuyProcess;