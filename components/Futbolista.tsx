import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Futbolista({nombre,dorsal,puesto,colorFondo="styles.contenedor.backgroundColor"}) {
  return (
    <View style={[styles.contenedor, {backgroundColor:colorFondo}]}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.dorsal}>{dorsal}</Text>
      <Text style={styles.puesto}>{puesto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: "center",
        width: 100,
        height: 100,
        backgroundColor: "#d63636ff",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#b42c2cff",
    },
    nombre: {
        fontSize: 18,
        color: "black",
    },
    dorsal: {
        fontSize: 40,
        color: "black",
    },
    puesto: {
        fontSize: 12,
        color: "black",
    }
})