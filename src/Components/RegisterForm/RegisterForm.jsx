import { useState } from "react";
import './RegisterForm.css' 
import { FaPencilAlt, FaMoneyCheckAlt, FaCar, FaMotorcycle, FaGift } from "react-icons/fa";
import InputField from "../InputField/InputField";

export const RegisterForm = () => {
    const [values, setValues] = useState({
        namePark: "",
        tarifaCarro: "",
        tarifaMoto: "",
        cantidadCarros: "",
        cantidadMotos: "",
        servicio: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleForm = (event) => {
        event.preventDefault();
        console.log(values);
    };

    return (
        <div className="container-form">
            <form className="form" onSubmit={handleForm}>
                <h1 className="form-title">Registro de Parqueadero</h1>
                
                <label className="info-inputField">Nombre del Parqueadero</label>
                <InputField
                    icon={FaPencilAlt}
                    type="text"
                    name="namePark"
                    value={values.namePark}
                    placeholder="Ej: Parqueadero San Martin"
                    onChange={handleInputChange}
                    required
                />

                <label className="info-inputField">Tarifas</label>
                <div className="inputField-double-container">
                    <InputField
                        icon={FaMoneyCheckAlt}
                        type="number"
                        name="tarifaCarro"
                        value={values.tarifaCarro}
                        placeholder="Carro / h"
                        onChange={handleInputChange}
                        required
                    />
                    <InputField
                        icon={FaMoneyCheckAlt}
                        type="number"
                        name="tarifaMoto"
                        value={values.tarifaMoto}
                        placeholder="Moto / h"
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <label className="info-inputField">Capacidad</label>
                <div className="inputField-double-container">
                    <InputField
                        icon={FaCar}
                        type="number"
                        name="cantidadCarros"
                        value={values.cantidadCarros}
                        placeholder="Carros"
                        onChange={handleInputChange}
                        required
                    />
                    <InputField
                        icon={FaMotorcycle}
                        type="number"
                        name="cantidadMotos"
                        value={values.cantidadMotos}
                        placeholder="Motos"
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <label className="info-inputField">¿Algún otro servicio que ofrecer?</label>
                <InputField
                    icon={FaGift}
                    type="text"
                    name="servicio"
                    value={values.servicio}
                    placeholder="Ej: Lavado de Autos"
                    onChange={handleInputChange}
                />

                <button type="submit" className="form-btn">Guardar</button>
            </form>
        </div>
    );
};