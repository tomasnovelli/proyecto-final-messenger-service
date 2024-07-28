import { DATA_CONTACTOS } from "../dataMook"

const guardarHistorial = (historial) => {
    const historialJSON = JSON.stringify(historial)
    localStorage.setItem('historial', historialJSON)
}

export const obtenerHistorial = () =>{
    const historial = localStorage.getItem('historial')
    if(historial){
        return JSON.parse(historial)
    } else{
        guardarHistorial(DATA_CONTACTOS)
        return DATA_CONTACTOS
    }
}