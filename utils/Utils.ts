import { Alert } from "react-native"

function abrirVentanaEmergente(titulo,mensaje) {
    Alert.alert(titulo,mensaje,
        [{text:"Aceptar"}]
    )
}
export {abrirVentanaEmergente}