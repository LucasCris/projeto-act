import './Home.css'
import Carosel from '../Carrosel'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function home() {
    const[valor,setValor] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
        .then(resp => setValor(resp.data))
        .catch(err => console.log(err)),[]
    })
    
    return(<>
    
    
    
    <section className="welcome">
    <div className="featured_apresentation">
        <h2>Olá, somos da Hachi pet</h2>

        <p>Cada um dos nossos produtos é especialmente pensado para o melhor dos nossos amaveis companheiros </p>
    </div>
    </section>
    
    <Carosel/>

    <section className='home-featured welcome'>
        <div className='home-featured_container'>
            <h2>Nossos Produtos:</h2>
            <div className="featured_products">  
            { valor.map((d, i) => (
                    <div key={i} className='container_cards'>
                        <div className="container-item-home">
                        <div className="home-wrapper">
                                <div class=""> <img src={d.img} alt="" className='img-card'/> </div>
                                <h3 className='title_card'> <span><h6>{d.nome}</h6></span></h3>
                                <p className='description_title'><span>Tamanho {d.tamanho}</span></p>
                            </div>
                            <div className="button-wrapper"> 
                                <button class="btn buttonfill">COMPRE AGORA</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </section>
    </>)
}
export default home