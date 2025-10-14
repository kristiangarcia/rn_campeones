import { abrirVentanaEmergente } from "../utils/Utils"

const EQUIPO = require('../data/jugadores.json')
function getJugador(dorsal) {
    return EQUIPO.find(jugador => jugador.dorsal === dorsal)
}
function mostrarInformacion(dorsal) {
    const jugador = getJugador(dorsal)
    const mensaje = getInformacion(jugador)
    abrirVentanaEmergente(`Información de ${jugador.nombre}`,mensaje)
}
function getInformacion(jugador) {
    return `Nombre: ${jugador.nombreCompleto}\nClub: ${jugador.equipo}\nEdad: ${jugador.edad}`
}
export {EQUIPO,getJugador,mostrarInformacion}