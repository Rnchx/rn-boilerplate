// comandos do react-native
import { View } from "react-native";

// estilo
import styles from "./styles";

// componentes
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

// objeto mocado
import { user } from "../../data/Profile";


export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />

      <TouchButton route="Category" title="Go to Category" />

      <TouchButton route="Teste" title="Go to Teste" />
    </View>
  );
}
