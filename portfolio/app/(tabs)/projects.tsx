import { Text, View, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity, Linking } from "react-native";
import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "expo-router";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: any;
  link: any;
  linkText?: string;
};
const projects: Project[] = [
  {
    id: 1,
    title: "Programação Competitiva",
    description:
`A Programação Competitiva é onde programadores competem para resolver problemas usando linguagens de programação como o C++. É uma forma de aprimorar suas habilidades de resolução de problemas e aprender novos algoritmos e estruturas de dados.
        
Nos últimos dois anos, participei de diversas competições realizadas pela Sociedade Brasileira de Computação e pelo International Collegiate Programming Contest (ICPC). 
        
Saiba mais sobre programação competitiva clicando no botão abaixo.`,
    image: require("../../assets/images/maratona.png"),
    link: "https://maratona.sbc.org.br/sobre/index.html",
    linkText: "Saiba mais",
  },
  {
    id: 2,
    title: "Lounge do Açaí",
    description: 
`Este projeto consiste em um sistema de autoatendimento desenvolvido para melhorar a eficiência e a experiência do usuário no Lounge do Açaí, localizado na Universidade Católica de Pernambuco.

O sistema permite que os usuários façam pedidos por meio de um aplicativo móvel, que são enviados para a cozinha via uma impressora bluetooth. Essa integração otimiza o processo de pedidos e melhora a comunicação entre clientes e funcionários.

Confira o projeto no GitHub clicando no botão abaixo.`,
    image: require("../../assets/images/lounge-logo.png"),
    link: "https://github.com/seuusuario/projeto2",
    linkText: "Acesse o GitHub",
  },
  {
      id: 3,
      title: "Jogo da Senha",
      description: 
`Este projeto é um jogo simples onde o usuário precisa adivinhar uma senha. A senha é uma sequência de 4 números. O usuário tem várias tentativas para adivinhar a senha.
             
O jogo foi desenvolvido usando React Native e Typescript. É uma ótima maneira de praticar suas habilidades de programação e se divertir ao mesmo tempo.
            
Você pode jogar clicando no botão abaixo.`,
      image: require("../../assets/images/jogo-da-senha.png"),
      link: "./password-game",
      linkText: "Jogar",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const router = useRouter();

  const handleButtonPress = (link: string) => {
    if (link.startsWith("http")) {
      Linking.openURL(link);
    } else if (link) {
      let route = link.startsWith("./") ? link.replace("./", "/(tabs)/") : link;
      if (!route.startsWith("/")) route = "/(tabs)/" + route;
      router.push(route as any);
    }
  };

  const handleScroll = (event: any) => {
    const cardWidth = CARD_WIDTH + 20; // width + margin
    const index = Math.round(event.nativeEvent.contentOffset.x / cardWidth);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Projetos</Text>
      </View>
      <View style={styles.projectsContainer}>
        <FlatList
          ref={flatListRef}
          data={projects}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH + 20}
          contentContainerStyle={{ alignItems: "center" }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardDescription}>{item.description}</Text>
              <TouchableOpacity
                style={styles.cardButton}
                onPress={() => handleButtonPress(item.link)}
              >
                <Text style={styles.cardButtonText}>{item.linkText}</Text>
              </TouchableOpacity>
            </View>
          )}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        />
        <View style={styles.dotsContainer}>
          {projects.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.dot,
                activeIndex === idx ? styles.dotActive : null,
              ]}
            />
          ))}
        </View>
      </View>
      <Navbar />
    </View>
  );
}

const CARD_WIDTH = Dimensions.get("window").width * 0.80;

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
    marginTop: 30,
  },
  projectsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    minHeight: "65%",
    padding: 10,
    marginBottom: 60,
    borderRadius: 15,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#eaf6ffff",
    borderRadius: 15,
    marginHorizontal: 10,
    alignItems: "center",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: "#12355bff",
  },
  cardImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardDescription: {
    fontSize: 16,
    color: "#12355bff",
    textAlign: "center",
    marginBottom: 18,
  },
  cardButton: {
    backgroundColor: "#12355bff",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  cardButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#b0b0b0',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#eaf6ffff',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
