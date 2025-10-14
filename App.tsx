import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import Futbolista from './components/Futbolista'
import FilaFutbolistas from './components/FilaFutbolistas'

export default function App() {
  const listaJugadores = require("./data/jugadores.json")
  return (
    <View style={styles.contenedor}>
      <Image source={require("./assets/campeones.png")} style={styles.logo} contentFit={"cover"} />
        <View style={styles.campo}>
          <FilaFutbolistas listaDorsales={[1]} />
          <FilaFutbolistas listaDorsales={[15,3,5,11]} />
          <FilaFutbolistas listaDorsales={[16,14]} />
          <FilaFutbolistas listaDorsales={[8,6,18]} />
          <FilaFutbolistas listaDorsales={[7]} />
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
    rowGap: 20
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  estiloPortero: {
    backgroundColor: "#a2d6eeff"
  }
})