import { StyleSheet, View } from 'react-native'
import React from 'react'
import { getJugador } from '../model/Equipo'
import Futbolista from './Futbolista'
import { mostrarInformacion } from '../model/Equipo'

export default function FilaFutbolistas({listaDorsales}) {
    return <View style={styles.fila}>
        {
            listaDorsales.map(getJugador)
                            .map(futbolista => <Futbolista
                                                    key={futbolista.dorsal}
                                                    nombre={futbolista.nombre}
                                                    dorsal={futbolista.dorsal}
                                                    puesto={futbolista.puesto}
                                                    onPress={() => mostrarInformacion(futbolista.dorsal)}
                                                />
                                )
        }
    </View>
}

const styles = StyleSheet.create({
fila: {
    flexDirection: "row",
    justifyContent: "space-around"
}
})