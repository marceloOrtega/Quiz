import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import perguntas from '../../../mocks/perguntas';

export default function PerguntasScreen({ navigation }) {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [acertos, setAcertos] = useState(0);

  const proximo = (indice) => {
    const respostaSelecionada = perguntas[perguntaAtual].respostas[indice];
    const respostaCorreta = respostaSelecionada.status;

    if (respostaCorreta) {
      setAcertos(acertos + 1);
      alert('Parabéns resposta correta');
    } else {
      alert('Resposta incorreta');
    }

    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      navigation.navigate("ResultScreen", { acertos: acertos + 1 });
    }
  };

  useEffect(() => {
    setPerguntaAtual(0);
    setAcertos(0);
  }, []);

  return (
    <View style={styles.container}>
      {perguntas.length > 0 ? (
        <>
          <Text style={styles.pergunta}>{perguntas[perguntaAtual].pergunta}</Text>
          {perguntas[perguntaAtual].respostas.map((resposta, index) => (
            <TouchableOpacity key={index} onPress={() => proximo(index)}>
              <Text style={styles.resp}>{resposta.resp}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>By Marcelo Ortega</Text>
          </View>
        </>
      ) : (
        <Text>Nenhuma pergunta encontrada.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'url("https://media.istockphoto.com/id/1268140975/vector/abstract-artwork-natural-beige-color.jpg?s=612x612&w=0&k=20&c=jrZ7SgqC1VhEVJMzrxyDZ-PE7U48wHuPbktQ9bj_fu4=")',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pergunta: {
    textAlign: "center",
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#8B5F3D',
  },
  resp: {
    fontSize: 17.5,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#8B5F3D',
    padding: 5,
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 20,
  },
  bottomText: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#8B5F3D',
  },
});
