import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Futbolista from './components/Futbolista'

export default function App() {
  return (
    <View style={styles.contenedor}>
      <Futbolista
        nombre={"Jose"}
        dorsal={9}
        puesto={"delantero"}
        style={styles.gigante}
      />
      <Futbolista
        nombre={"Miguel"}
        dorsal={11}
        puesto={"delantero"}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gigante: {
    width: 300,
    height: 300,
    marginTop: 200,
    borderRadius: 30,
    color: "green"
  }
})