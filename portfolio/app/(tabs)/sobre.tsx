import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import Navbar from "../components/navbar";
import { useRouter } from "expo-router";

export default function Sobre() {
	const router = useRouter();
	
  return (
    <View style={styles.container}>
      <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/')}
        >
          <Text style={styles.backButtonText}>← Voltar</Text>
			</TouchableOpacity>  
      <Text style={styles.title}>Sobre o App</Text>
      <View style={styles.content}>
        <Text style={styles.text}>
          Este aplicativo foi desenvolvido como portfólio pessoal, utilizando as seguintes tecnologias:
        </Text>
        <Text style={styles.listTitle}>Tecnologias e Módulos Utilizados:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• React Native</Text>
          <Text style={styles.listItem}>• Expo</Text>
          <Text style={styles.listItem}>• TypeScript</Text>
          <Text style={styles.listItem}>• Expo Router (React Navigation)</Text>
          <Text style={styles.listItem}>• Componentes nativos do React Native (View, Text, Image, FlatList, TouchableOpacity, StyleSheet, etc.)</Text>
        </View>
        <Text style={styles.text}>
          O app foi criado com foco em usabilidade, responsividade e boas práticas de desenvolvimento mobile. Sinta-se à vontade para explorar as funcionalidades e conhecer mais sobre meus projetos e habilidades!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#12355bff",
    flex: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#eaf6ffff",
    marginBottom: 20,
    textAlign: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: "#eaf6ffff",
    textAlign: "center",
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 20,
    color: "#eaf6ffff",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  list: {
    alignItems: "flex-start",
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    color: "#eaf6ffff",
    marginBottom: 8,
  },
  backButton: {
    alignSelf: 'flex-start',

    marginTop: 50,
    marginBottom: 5,
    paddingHorizontal: 8,
  },
  backButtonText: {
    color: '#eaf6ffff',
    fontSize: 16,
  },
});
