import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React , {useLayoutEffect}  from 'react';
import { useNavigation } from '@react-navigation/native';



const Index = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ marginRight: 15 }}>
            <Icon name="bell" size={25} color="white" />
          </TouchableOpacity>
          
        </View>
      ),
    });
  }, [navigation]);
  
  return (
    <ImageBackground source={{uri : 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6f936b41180847.580e071719dc2.jpg'}} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.navBar}>
          

        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Bienvenue sur notre application de streaming vidéo</Text>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Accueil')}>
            <Text style={styles.buttonText}>Commencer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Index;
