import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const apiKey = "0126dc4d1a273fc732142d6812f41670";

const Index = ({ route }) => {
  const [video, setVideo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Movies',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        color: 'white',
      },
    });
  }, [navigation]);

  useEffect(() => {
    async function fetchVideo() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${route.params.id}/videos?api_key=${apiKey}`
      );
      setVideo(response.data.results[0]?.key);
    }
    fetchVideo();
  }, [route.params.id]);

  return (
    <Container>
      {video && (
        <StyledWebView
          source={{ uri: `https://www.youtube.com/embed/${video}` }}
        />
      )}
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  background-color: black;
`;

const StyledWebView = styled(WebView)`
  flex: 1;
`;

export default Index;
