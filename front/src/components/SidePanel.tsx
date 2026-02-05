import "../styles/SidePanel.css"

export default function SidePanel() {
    return (
        <div className="painel-container">
            <div className="panel-button-list">
                <span className="button-shape">
                    <a href="">Meu perfil</a>
                </span>
                <span className="button-shape">
                    <a href="">Promoções</a>
                </span>
                <span className="button-shape">
                    <a href="">Listas</a>
                </span>
            </div>
            <div className="panel-footer">
                <p>Desenvolvido por @MarcinBuenoo</p>
            </div>
        </div>
    )
}