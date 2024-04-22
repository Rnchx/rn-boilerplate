import { View } from "react-native";

import styles from "./style";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";
import { useState } from "react";

export default function Users() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <View style={styles.container}>
      <Title title="Users" />

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />

    </View>
  );
}
