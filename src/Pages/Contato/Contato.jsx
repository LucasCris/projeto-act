

import React from 'react';

import './Contato.css';
function Contato() {
    return(<>
    <section className="welcome">
                <div className="feacture_enterprise">
                    <h2>Entre em Contato</h2>
                    {/* Adicione o ícone do envelope usando a classe do Font Awesome */}
                    <i className="fas fa-envelope" style={{ color: '#007bff' }}></i>&ensp;
                    <a href="mailto:svsmiguel@gmail.com" className="contact-link">meuemailteste@gmail.com</a>
                    <br /> <br />

                    <i className="fab fa-whatsapp" style={{ color: 'green' }}></i>&ensp;
                    <a href="https://wa.me/5511515912641?text=Mensagem+teste+para+o+projeto+SENAI" className="whatsapp-link">
                        <span style={{ color: 'red' }}>Nosso WhatsApp para contato! </span>
                        11-515912641
                    </a>
                    <br /> <br />
                    <p>Estamos aqui para ajudar. Envie-nos uma mensagem!</p>
                </div>
            </section>

            <section className='featured_home welcome'>
                <div className='featured_container'>
                    <h2>Formulário de Contato</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id="name" name="name" placeholder="Seu nome" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name="email" placeholder="Seu e-mail" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensagem:</label>
                            <textarea id="message" name="message" placeholder="Sua mensagem" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn fill">Enviar Mensagem</button>
                    </form>
                </div>
            </section>

            <section className="welcome">
</section>
    </>)
}
export default Contato