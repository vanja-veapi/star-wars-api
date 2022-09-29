import React from 'react'
import { useQuery } from 'react-query'
import { View, Text, Button, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import { Card } from '../shared/card'
import { globalStyles } from '../styles/global'
import { getMovies } from '../api/movies'
const Home = ({ navigation }) => {
  const navigateHandler = (url, movie = null) => navigation.navigate(url, movie)

  const { data: movies, isLoading } = useQuery("movies", getMovies)


  if (isLoading) {
    return <View style={globalStyles.center}><ActivityIndicator size={90} color="tomato" /></View>
  }

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateHandler("Movie", item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      {/* {movies?.map((movie, index) => (
        <TouchableOpacity>
          <Card key={index}>
            <Text style={globalStyles.titleText}>{movie.title}</Text>
          </Card>
        </TouchableOpacity>
      ))} */}

      <Button
        title="Add new movie"
        onPress={() => navigateHandler("Add Movie")}
        color="tomato"
      />
    </View>
  )
}

export default Home