import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Index = ({ searchMovies }) => {
  const [term, setTerm] = useState('');

  const onSubmit = () => {
    searchMovies(term);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher un film"
        value={term}
        onChangeText={setTerm}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});

export default Index;
