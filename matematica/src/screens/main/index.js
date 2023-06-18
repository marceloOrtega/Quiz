import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';

export default function MainScreen({ navigation }) {
  const abrirPerguntas = () => {
    navigation.navigate('PerguntasScreen');
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>QUIZ MATEMÁTICA</Text>
        <TouchableOpacity style={styles.botao} onPress={() => abrirPerguntas()}>
          <TouchableHighlight
            style={[styles.touchableHighlight, isHovered && styles.hoveredHighlight]}
            onPress={() => abrirPerguntas()}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Text style={styles.textoBotao}>Clique aqui</Text>
          </TouchableHighlight>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>By Marcelo Ortega</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url("https://i.pinimg.com/originals/17/98/99/1798991b6c04db0156998215aa4c73de.jpg")',
    backgroundSize: 'cover',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    margin: 50,
  },
  touchableHighlight: {
    backgroundColor: '#bd8c68',
    padding: 10,
    borderRadius: 5,
  },
  hoveredHighlight: {
    backgroundColor: '#8B3626',
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8B5F3D',
    fontStyle: 'italic',
  },
  textoBotao: {
    fontSize: 18,
    color: '#fff',
  },
  bottomTextContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  bottomText: {
    textAlign: "center",
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: 16,
    color: '#8B5F3D',
  },
});
