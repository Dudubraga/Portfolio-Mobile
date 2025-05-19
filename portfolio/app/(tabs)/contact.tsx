import { Text, View, StyleSheet, Image } from "react-native";
import Navbar from "../components/navbar";

export default function Contact() {
    return (
        <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Contato</Text>
            <Text style={styles.subtitle}>
            Entre em contato comigo através das redes sociais ou pelo e-mail.
            </Text>
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
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
    },
    subtitle: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
});