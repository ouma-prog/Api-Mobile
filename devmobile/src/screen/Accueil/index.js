import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import axios from 'axios';
import Search from '../../components/Search';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const apiKey = "0126dc4d1a273fc732142d6812f41670";

const Index = () => {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  const searchMovies = async (term) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}`
    );
    setMovies(response.data.results);
  };
  
  const handleSearch = (text) => {
    setTerm(text);
    searchMovies(text);
  };

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      setMovies(response.data.results);
    }
    fetchMovies();
  }, []);

  const renderMovie = ({ item }) => (
    <MovieContainer>
      <TouchableOpacity onPress={() => navigation.navigate('MovieVideo', { id: item.id })}>
        <Poster source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
      </TouchableOpacity>
      <MovieDetails>
        <Title>{item.title}</Title>
        <ReleaseDate>Release Date: {item.release_date}</ReleaseDate>
        <Overview>{item.overview}</Overview>
      </MovieDetails>
    </MovieContainer>
  );

  return (
    <Container>
      <SearchContainer>
        <Search
          searchMovies={searchMovies} 
          handleSearch={handleSearch}
          onSubmitEditing={() => handleSearch(searchTerm)}
          onChangeText={(text) => {
            setSearchTerm(text);
            handleSearch(text);
          }}
        />
      </SearchContainer>
      <MovieList
        data={movies}
        keyExtractor={(movie) => movie.id.toString()}
        renderItem={renderMovie}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: black;
  padding-horizontal: 20px;
  padding-top: 20px;
`;

const MovieContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const Poster = styled.Image`
  width: 120px;
  height: 180px;
  border-radius: 10px;
`;

const MovieDetails = styled.View`
  flex: 1;
  margin-left: 20px;
  background-color: white;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ReleaseDate = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Overview = styled.Text`
  font-size: 16px;
  line-height: 22px;
`;

const SearchContainer = styled.View``;

const MovieList = styled.FlatList``;

export default Index;
