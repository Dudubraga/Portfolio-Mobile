import { Text, View, StyleSheet, Image } from "react-native";
import Navbar from "../components/navbar";
import { languages, tools } from "../../assets/data/skills";

export default function Skills() {
  return (
		<View style={styles.container}>
			<Text style={styles.title}>Habilidades</Text>
			<View style={styles.skillsContainer}>
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Text style={styles.skillsTitle}>Linguagens de Programação</Text>
					<View style={styles.skillsList}>
						{languages.map((skill) => (
							<Text key={skill.id} style={styles.skill}>
								{skill.name}
							</Text>
						))}
					</View>
				</View>
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Text style={styles.skillsTitle}>Ferramentas e Tecnologias</Text>
					<View style={styles.skillsList}>
						{tools.map((skill) => (
							<Text key={skill.id} style={styles.skill}>
								{skill.name}
							</Text>
						))}
					</View>
				</View>
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
		marginBottom: 20,
	},
	skillsContainer: {
		flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    padding: 10,
    marginBottom: 60,
    borderRadius: 15,
	},
	skillsTitle: {
		color: "#eaf6ffff",
		fontSize: 25,
		fontWeight: "bold",
	},
	skillsList: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	skill: {
		color: "#12355bff",
		fontSize: 16,
		margin: 10,
		backgroundColor: "#eaf6ffff",
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 15,
	},
});