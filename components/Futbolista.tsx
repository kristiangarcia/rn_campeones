import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native'
import React from 'react'

type FutbolistaProps = {
    nombre:string
    dorsal:number
    puesto:string
    style?:StyleProp<FutbolistaStyle>
    onPress?:() => void
}

type FutbolistaStyle = ViewStyle & {
    color?: string
}

export default function Futbolista({nombre,dorsal,puesto,style={},onPress}:FutbolistaProps) {
  style = StyleSheet.flatten(style)
  const estiloContenedorAmpliado = {
    width:style.width ?? styles.contenedor.width,
    height:style.height ?? styles.contenedor.height,
    backgroundColor:style.backgroundColor ?? styles.contenedor.backgroundColor
  }
  const estiloDorsalAmpliado = {
    color: style.color ?? styles.dorsal.color
  }
  return (
    <Pressable style={[styles.contenedor, estiloContenedorAmpliado]} onPress={onPress}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={[styles.dorsal, estiloDorsalAmpliado]}>{dorsal}</Text>
      <Text style={styles.puesto}>{puesto}</Text>
    </Pressable>
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