import "./footer.css"
import "../assets/cores.css"
import Pix from '../assets/img/pix@2x.png'
import Visa from '../assets/img/visa@2x.png'
import MasterCard from '../assets/img/mastercard@2x.png'
import Elo from '../assets/img/hipercard@2x.png'
import HiperCard from '../assets/img/elo@2x.png'
import Frenet from '../assets/img/823@2x.png'
import TotalExpress from '../assets/img/1683@2x.png'
import NuvemEnvio from '../assets/img/4190@2x.png'

function Footer() {
    return(<>
        <div className="footer">
            <div className="footer-container pd-l pd-r">
                <div className="footer_elements row">
                    <div className="col">
                        <h4>Hachi Pet</h4>
                        <p className="mt-1"> Somos uma empresa de vendas alimentos e produtos relacionados a animais domesticos</p>
                    </div>
                    <div className="col col-1  ">
                        <ul className="mt-1">
                            <li className="footer-menu-item"><a href="#">Trocas e devoluções</a></li>
                            <li className="footer-menu-item"><a href="/politica-de-envios">Política de envios</a></li>
                            <li className="footer-menu-item"><a href="#">Contato</a></li>
                        </ul>
                    </div>
                    <div className="col col-1 acard">
                        <h4>Nossos produtos</h4>
                        <ul>
                            <li className="footer-menu-item"><a href="#">Coleiras</a></li>
                            <li className="footer-menu-item"><a href="#">Coleiras</a></li>
                            <li className="footer-menu-item"><a href="#">Coleiras</a></li>
                            <li className="footer-menu-item"><a href="#">Coleiras</a></li>
                            <li className="footer-menu-item"><a href="#">Coleiras</a></li>
                        </ul>
                    </div>
                    <div className="col col-1 acard">
                        <h4>Entre em contato</h4>
                        <ul>
                            <li className="footer-menu-item"><a href="#">11-515912641</a></li>
                            <li className="footer-menu-item"><a href="/contato">Contato</a></li>
                        </ul>
                    </div>
                </div>
                <div className="divide">

                </div>
                <div className="footer-payment row ">
                    <div className="payment_container ">
                        <div className="payment row">
                            <div className="payment_item" >
                                <h4>Meios de pagamento</h4>
                            </div>
                            <div className="payment_item">
                                <img src={Pix} className="img_payment" alt="Logo Pix" />
                                <img src={Visa} className="img_payment" alt="Logo Visa" />
                                <img src={MasterCard} className="img_payment" alt="Logo MasterCard" />
                                <img src={HiperCard} className="img_payment" alt="Logo HiperCard" />
                                <img src={Elo} className="img_payment"  alt="Logo Elo" />
                            </div>
                        </div>
                        <div className="payment row">
                            <div className="payment_item">
                                <h4>Meios de envio</h4>
                            </div>
                            <div className="payment_item">
                                <img src={NuvemEnvio} className="img_payment" alt="Logo NuvemEnvio" />
                                <img src={Frenet} className="img_payment" alt="Logo Frenet" />
                                <img src={TotalExpress} className="img_payment" alt="Logo Express" />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </>)
}
export default Footer
