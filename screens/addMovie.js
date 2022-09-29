import React from 'react';
import * as yup from 'yup';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';

import { globalStyles } from '../styles/global';

const schema = yup.object().shape({
  movie: yup.string().required("Polje film je obavezno !"),
  episode: yup.number().min(1, ({ min }) => `Broj ne moze biti manj od ${min}`).required("Polje epizoda je obavezno"),
});

const AddMovie = () => {
  return (
    <Formik
      initialValues={{ movie: "", episode: "" }}
      validationSchema={schema}
      onSubmit={((values, actions) => {
        console.log(values);
        actions.resetForm();
      })}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={globalStyles.container}>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange('movie')}
            placeholder="Add a movie"
            value={values.movie}
          />
          <Text style={globalStyles.errorMessage}>{errors.movie}</Text>

          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange('episode')}
            placeholder="Add an episode"
            value={values.episode}
            keyboardType="numeric"
          />
          <Text style={globalStyles.errorMessage}>{errors.episode}</Text>

          <View style={styles.buttonContainer}>
            <Button
              onPress={handleSubmit}
              title="Submit"
              color="tomato"
            />
          </View>
        </View>
      )


      }
    </Formik >
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 25
  },
})

export default AddMovie