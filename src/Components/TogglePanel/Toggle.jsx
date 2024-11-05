import { useState } from 'react';
import './Toggle.css'

export const Toggle = () => {
    const [isActive, setIsActive] = useState(false);

    const handleMouseEnterLeft = () => {
        setIsActive(false); // Desactiva la clase `active` solo al entrar en el panel izquierdo
    };

    const handleMouseEnterRight = () => {
        setIsActive(true); // Activa la clase `active` solo al entrar en el panel derecho
    };

    return (
        <div className={`container ${isActive ? 'active' : ''}`}>
            <div className="toggle-container">
                <div className="toggle">
                    <div
                        className="toggle-panel toggle-left"
                        onMouseEnter={handleMouseEnterLeft} // Activa `active` solo cuando el mouse entra
                    >
                        <span>Logo</span>
                        <h1>Name App</h1>
                        <p>Slogan</p>
                    </div>

                    <div
                        className="toggle-panel toggle-right"
                        onMouseEnter={handleMouseEnterRight} // Desactiva `active` solo cuando el mouse entra
                    >
                        <h1>¡Empieza el registro de tu parqueadero!</h1>
                        <span>Logo</span>
                    </div>
                </div>
            </div>
        </div>
    );
};