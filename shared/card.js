import { StyleSheet, View } from "react-native";

export const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {children}
      </View>
    </View >
  )
};

export const MovieCard = ({ children }) => {
  return (
    <View style={styles.movieCard}>
      <View style={styles.cardContent}>
        {children}
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 10,
  },
  movieCard: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    textAlign: "center"
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
    fontSize: 40,
  }
})