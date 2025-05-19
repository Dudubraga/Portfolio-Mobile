import { Image, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/navbar";

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Eduardo Costa Braga</Text>
                <Image
                    source={require("../assets/images/dudu-desenho.png")}
                    style={styles.image}
                ></Image>
                <Text style={styles.text}>
                    Sou estudante do 5º período de Ciência da Computação na
                    Universidade Católica de Pernambuco. enho paixão por
                    aprender e explorar o fascinante mundo da tecnologia,
                    dedicando-me ao desenvolvimento técnico e pessoal por meio
                    de experiências práticas e extracurriculares.
                </Text>
                <Text style={styles.text}>
                    {"\n"}
                    Participo do grupo de programação competitiva, onde
                    aprofundo meus conhecimentos em algoritmos, estruturas de
                    dados e programação dinâmica. Tive a oportunidade de
                    competir em maratonas promovidas pela SBC e pela ICPC, o que
                    fortaleceu minha capacidade de raciocínio lógico, trabalho
                    em equipe e resiliência diante de desafios.
                </Text>
                <Text style={styles.text}>
                    {"\n"}
                    Além disso, desenvolvi projetos práticos nas áreas de
                    desenvolvimento web e mobile, como um sistema de
                    autoatendimento e um portfólio online, que refletem minha
                    preocupação com usabilidade e boas práticas de
                    desenvolvimento. Sou movido pela curiosidade e pela vontade
                    de aprender, o que me levou a integrar o grupo de pesquisa
                    IoT and Data Atelier.
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
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        margin: 20,
        alignSelf: "center",
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#eaf6ffff",
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#eaf6ffff",
        textAlign: "center",
    },
});
