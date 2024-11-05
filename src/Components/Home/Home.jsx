import Ventaja from "./Ventaja";
import { FaParking, FaCalculator, FaRegClock, FaCamera } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export const Home = () => {

    return (
        <div className="container-home">
            <h1 className="name-app">Name App</h1>
            <p className="slogan">¡Administra tu parqueadero facilmente!</p>


            <div className="container-ventajas">
                <Ventaja title="Gestion de Espacios Inteligente" icon={FaParking}>
                Modifica la cantidad de espacios disponibles según tus necesidades y mantén el parqueadero en orden.
                </Ventaja>

                <Ventaja title="Control Total de Tarifas" icon={FaMoneyBillTrendUp}>
                Ajusta las tarifas en tiempo real desde la app y optimiza tus precios según la demanda.
                </Ventaja>

                <Ventaja title="Cálculo Automático de Tarifas" icon={FaCalculator}>
                Nuestra app calcula el monto exacto que cada vehículo debe pagar, eliminando errores de cobro.
                </Ventaja>

                <Ventaja title="Monitoreo de Entradas y Salidas 24/7" icon={FaRegClock}>
                Supervisa el flujo de vehículos al instante y asegura una administración eficiente.
                </Ventaja>

                <Ventaja title="Registro de Vehículos con Cámaras Inteligentes" icon={FaCamera}>
                Con tecnología de reconocimiento, registra vehículos automáticamente para mayor control y seguridad.
                </Ventaja>
            </div>
        </div>
    )
}