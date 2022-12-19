function Formulario() {
    return (
        <form>
            <input className="texto" type="text" placeholder="Data de Inicio" />
            <input className="texto" type="text" placeholder="Data de Fim" />
            <input className="texto" type="text" placeholder="Nome operador transacionado" />

            <input className="botao" type="button" value="Pesquisar" />
        </form>
    )
}

export default Formulario;