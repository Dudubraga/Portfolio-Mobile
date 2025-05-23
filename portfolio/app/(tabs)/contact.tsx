import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import Navbar from "../components/navbar";
import { contacts } from "../../assets/data/contacts";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.subTitle}>Entre em contato comigo através das redes sociais ou pelo e-mail:{"\n\n"} dudubraga2004@gmail.com</Text>
			<View style={styles.contactContainer}>
				{contacts.map((contact) => (
					<TouchableOpacity
						key={contact.id}
						style={styles.contact}
						onPress={() => Linking.openURL(contact.link)}
					>
						<Image
							source={contact.image}
							style={styles.contactImage}
						/>
						<Text style={styles.subTitle}>{contact.name}</Text>
					</TouchableOpacity>
				))}
			</View>
    	<Navbar />
    </View>
	);
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: "#12355bff",
		flex: 1,
		flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
	},
	title: {
		fontSize: 35,
		fontWeight: "bold",
		color: "#eaf6ffff",
		marginTop: 50,
		marginBottom: 10,
	},
	subTitle: {
		fontSize: 20,
		color: "#eaf6ffff",
		marginBottom: 20,
		textAlign: "center",
	},
	contactContainer: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    padding: 10,
    marginBottom: 60,
    borderRadius: 15,
	},
	contact: {
		alignItems: "center",
		margin: 30,
	},
	contactImage: {
		width: 100,
		height: 100,
		tintColor: "#eaf6ffff",
	},
});