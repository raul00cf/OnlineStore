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
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}



const BuyProcess = () => (
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
            {addCards()}
            {addCards()}
        </div>
     </Wrapper>   
    </>
)

export default BuyProcess;