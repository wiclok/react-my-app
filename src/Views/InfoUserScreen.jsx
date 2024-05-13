import { StyleSheet, Text, View } from "react-native"

export const InfoUserScreen = () => {
  return(
    <View style={styles.container}>
      <Text>Info user</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
  },
})