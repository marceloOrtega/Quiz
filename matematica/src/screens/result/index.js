import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ResultScreen({ navigation, route }) {
  const proximo = () => {
    navigation.navigate("MainScreen")
  }

  const { acertos } = route.params;

  let res;
  let statusColor;

  if (acertos >= 5) {
    res = "Aprovado"
    statusColor = "#00FF00"; // Verde para aprovado
  } else {
    res = "Reprovado"
    statusColor = "#FF0000"; // Vermelho para reprovado
  }

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Resultado do Quiz:</Text>
      <Text style={styles.total}>Perguntas: 10</Text>
      <Text style={styles.acertos}>Acertos: {acertos}</Text>
      <Text style={styles.erros}>Erros: {10 - acertos}</Text>
      <Text style={[styles.res, { color: statusColor }]}>{res}</Text>

      <TouchableOpacity onPress={() => proximo()}>
        <Text style={styles.reiniciar}>Reiniciar</Text>
      </TouchableOpacity>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>By Marcelo Ortega</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundImage: 'url("https://media.istockphoto.com/id/1268140975/vector/abstract-artwork-natural-beige-color.jpg?s=612x612&w=0&k=20&c=jrZ7SgqC1VhEVJMzrxyDZ-PE7U48wHuPbktQ9bj_fu4=")',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    fontSize: "2rem",
    fontWeight: 'italic',
    fontWeight: 'bold',
    color: "#171716"
  },
  total: {
    fontSize: "2rem",
    fontWeight: 'italic',
    fontWeight: 'bold',
    color: "#8B5F3D"
  },
  acertos: {
    fontSize: "2rem",
    fontWeight: 'italic',
    fontWeight: 'bold',
    color: "#50B965"
  },
  erros: {
    fontSize: "2rem",
    fontWeight: 'italic',
    fontWeight: 'bold',
    color: "#C74331"
  },
  res: {
    fontSize: "2rem",
    fontWeight: 'italic',
    fontWeight: 'bold',
  },
  reiniciar: {
    fontSize: "2rem",
    fontWeight: 'italic',
    fontWeight: 'bold',
    color: "#8B5F3D"
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