import { Text, View, StyleSheet, Image } from "react-native";
import Navbar from "../components/navbar";

export default function Projects() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Projetos</Text>
                <Text style={styles.subtitle}>
                    Aqui estão alguns dos projetos que desenvolvi e/ou participei 
                    durante a minha jornada.
                </Text>
            </View>
            <View style={styles.projectsContainer}>

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
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#eaf6ffff",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 15,
        color: "#eaf6ffff",
        textAlign: "center",
        marginBottom: 10,
    },
    projectsContainer: {
        backgroundColor: "#eaf6ffff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        minHeight: "65%",
        padding: 10,
        marginBottom: 70,
        borderRadius: 15,
    },
});
