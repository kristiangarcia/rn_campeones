import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import Futbolista from './components/Futbolista'

export default function App() {
  return (
    <View style={styles.contenedor}>
      <Image
        source={require("./assets/campeones.png")}
        style={styles.logo}
        contentFit={"fill"}
      />
      <View style={styles.campo}>
        <View style={styles.fila}>
          <Futbolista nombre={"Casillas"} dorsal={1} puesto={"Portero"} colorFondo={"#a2d6eeff"} />
        </View>
        <View style={styles.fila}>
          <Futbolista nombre={"Ramos"} dorsal={15} puesto={"Defensa"} />
          <Futbolista nombre={"Piqué"} dorsal={3} puesto={"Defensa"} />
          <Futbolista nombre={"Puyol"} dorsal={5} puesto={"Defensa"} />
          <Futbolista nombre={"Capdevila"} dorsal={11} puesto={"Defensa"} />
        </View>
        <View style={styles.fila}>
          <Futbolista nombre={"Busquets"} dorsal={16} puesto={"Centrocampista"} />
          <Futbolista nombre={"Alonso"} dorsal={14} puesto={"Centrocampista"} />
        </View>
        <View style={styles.fila}>
          <Futbolista nombre={"Xavi"} dorsal={8} puesto={"Centrocampista"} />
          <Futbolista nombre={"Iniesta"} dorsal={6} puesto={"Centrocampista"} />
          <Futbolista nombre={"Pedro"} dorsal={18} puesto={"Centrocampista"} />
        </View>
        <View style={styles.fila}>
          <Futbolista nombre={"Villa"} dorsal={7} puesto={"Delantero"} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1
  },
  logo: {
    width: "100%",
    height: 250
  },
  campo: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#468944ff",
    padding: 20,
    rowGap: 20
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
})