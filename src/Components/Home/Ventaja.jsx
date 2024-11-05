import './Home.css' 

const Ventaja = ({ children, title, icon: Icon}) => {
    return (
        <div className="ventaja">
            {Icon && <Icon className="ventaja-icon" />}
            <div className="ventaja-container-info">
                <span className="ventaja-title">{title}</span>
                <p className="ventaja-info">{children}</p>
            </div>
            
        </div>
    )
}

export default Ventaja;