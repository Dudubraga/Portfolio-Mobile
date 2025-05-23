import { Text, View, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity, Linking } from "react-native";
import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "expo-router";
import { projects } from "../../assets/data/projects";

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
      <Text style={styles.title}>Projetos</Text>
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
              {item.linkText && (
                <TouchableOpacity
                style={styles.cardButton}
                onPress={() => handleButtonPress(item.link)}
                >
                <Text style={styles.cardButtonText}>{item.linkText}</Text>
              </TouchableOpacity>
              )}
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
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#eaf6ffff",
    marginTop: 50,
    marginBottom: 20,
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
    minHeight: "100%",
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
    position: "relative",
    bottom: 0,
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
