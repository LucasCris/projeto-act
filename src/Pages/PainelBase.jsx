import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import './PainelBase.css'


export function PainelBase()
{
    const [valor, setValor] = useState([])
    const navegar = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
        .then(resp => setValor(resp.data))
        .catch(err => console.log(err))
    })
    return(
        <>
        <div className="container"><br />
            <div className="text-end"><Link to="/Painel" className="btn btn-primary">Adicionar</Link> </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>valor</th>
                        <th>Detalhes</th>
                        <th>Foto</th>
                    </tr>
                </thead>

                <tbody>
                    {
                    valor.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.nome}</td>
                        <td>{d.valor}</td>
                        <td>{d.detelhes}</td>
                        <td> <img className="fto" src={d.img}  /> </td>
                        <td>
                        <Link to={`/atualizar/${d.id}`} className='btn btn-sm btn-success'>Atualizar</Link>
                        <button onClick={e => hardSubmit(d.id)} className='btn btn-sm ms-5 btn-danger' >Excluir</button>
                        </td>
                    </tr>
                    ))
                    }

            </tbody>
            </table>
        </div>
        </>
    )
    function hardSubmit(id)
    {
        const conf = window.confirm("Deseja excluir esse registro??")
        if(conf)
        {
            axios.delete("http://localhost:3000/produtos/"+id)
            .then(resp => {
                alert("Dados excluidos com sucesso!!")
                navegar("/adm321")
            })
            .catch(err => console.log(err))
        }
    }
}