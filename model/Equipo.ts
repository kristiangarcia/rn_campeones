import { abrirVentanaEmergente } from "../utils/Utils"
import { Jugador } from "./Jugador"

const EQUIPO:Array<Jugador> = require('../data/jugadores.json')
function getJugador(dorsal:number):Jugador {
    const jugadorNoEncontrado = {
        nombre: "",
        nombreCompleto: "",
        dorsal: 0,
        puesto: "",
        equipo: "",
        edad: 0
    } 
    return EQUIPO.find(jugador => jugador.dorsal === dorsal) ?? jugadorNoEncontrado
}
function mostrarInformacion(dorsal:number):void {
    const jugador = getJugador(dorsal)
    const mensaje = getInformacion(jugador)
    abrirVentanaEmergente(`Información de ${jugador.nombre}`,mensaje)
}
function getInformacion(jugador:Jugador):string {
    return `Nombre: ${jugador.nombreCompleto}\nClub: ${jugador.equipo}\nEdad: ${jugador.edad}`
}
export {EQUIPO,getJugador,mostrarInformacion}