import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useQueryClient } from "react-query";

import { globalStyles } from "../styles/global";
import { MovieCard } from "../shared/card";

export default Movie = ({ route }) => {
  const queryClient = useQueryClient();

  const title = route.params.title;
  const description = route.params.opening_crawl;
  const episode = route.params.episode_id;

  queryClient.setQueriesData("movie", `${title} (Episode ${episode})`);
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <MovieCard>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.movieDescription}>{description}</Text>
          <Text style={styles.movieDescription}>{description}</Text>
          <Text style={styles.episode}>Episode: {episode}</Text>

        </MovieCard>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30
  },
  episode: {
    marginTop: 20,
    fontSize: 25,
    fontStyle: "italic",
    textAlign: 'center'
  },
  movieDescription: {
    textAlign: 'center',
    fontSize: 18
  }
})