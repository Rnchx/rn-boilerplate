import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  user: {
    padding: 10,
    margin: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  userInfos: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  messageLoading: {
    fontSize: 15,
    fontWeight: "bold",
    color: "red"
  }
});

export default styles;
