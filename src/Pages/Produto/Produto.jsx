function Produto(){
    return(<>
        <div className="container-product">
            <div>
                <div>
                        <a href=""><img src="" alt="" /></a>
                </div>
                <div>
                    <div>
                        <div>
                            <a href="/inicio"> </a>
                            <span className="divider"> &#60</span>
                            <a href="/produtos"></a>
                            <h1>Nome-Produto</h1>
                        </div>
                        <div className="price-container">
                            <span></span>
                        </div>
                        <div className="product-variant"> 
                            <div>
                                <label>Tamanho</label>
                                <select name="variation-1" id="tamanho"></select>
                            </div>
                            <div>
                                <label>Tamanho</label>
                                <select name="variation-2" id="graos"></select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>-</div>
                                <div>Valor</div>
                                <div>+</div>
                            </div>
                            <div><input type="submit"/></div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </>)
}
export default Produto