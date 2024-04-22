import { View, Text } from "react-native";
import axios from "axios";

import styles from "./style";
import Title from "../../components/Title";
import { useState, useEffect } from "react";

export default function Users() {

  const [users, setUsers] = useState([]);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  console.log(apiUrl);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`, {
        headers: {
          origin: "request-from-react-native-app"
        },
      });
      setUsers(response.data.users);
      console.log(users)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users)


  return (
    <View style={styles.container}>
      <Title title="Usuários" />

      {
        users ? (
          users.map((user) => (
            <View key={user.id} style={styles.user}>
              <Text style={styles.userInfos}>{user.name}</Text>
              <Text style={styles.userInfos}>{user.email}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.messageLoading}>Carregando ...</Text>
        )}
    </View>
  );
}
