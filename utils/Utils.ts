import { Alert } from "react-native"

function abrirVentanaEmergente(titulo:string,mensaje:string):void {
    Alert.alert(titulo,mensaje,
        [{text:"Aceptar"}]
    )
}
export {abrirVentanaEmergente}