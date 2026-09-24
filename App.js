import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Pressable, Image, Text, View } from 'react-native';

const fotos = [
  {
    imagem: 'https://picsum.photos/id/237/200/300',
    titulo: 'Cachorro',
    descricao: 'Animal fofo e atento.',
  },
  {
    imagem: 'https://picsum.photos/id/238/200/300',
    titulo: 'Lago',
    descricao: 'Paisagem tranquila.',
  },
  {
    imagem: 'https://picsum.photos/id/29/200/300',
    titulo: 'Montanha',
    descricao: 'Vista ampla da serra.',
  },
  {
    imagem: 'https://picsum.photos/id/62/200/300',
    titulo: 'Praia',
    descricao: 'Mar com areia clara.',
  },
  {
    imagem: 'https://picsum.photos/id/90/200/300',
    titulo: 'Cidade',
    descricao: 'Rua movimentada ao anoitecer.',
  },
  {
    imagem: 'https://picsum.photos/id/100/200/300',
    titulo: 'Flores',
    descricao: 'Campo com cores vivas.',
  },
];

export default function App() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const fotoAtual = fotos[indiceAtual];

  function voltarFoto() {
    setIndiceAtual((anterior) => (anterior === 0 ? fotos.length - 1 : anterior - 1));
  }

  function avancarFoto() {
    setIndiceAtual((anterior) => (anterior === fotos.length - 1 ? 0 : anterior + 1));
  }

  function selecionarFoto(index) {
    setIndiceAtual(index);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tituloApp}>Meu álbum</Text>

      <View style={styles.navegacao}>
        <Pressable style={styles.botaoNav} onPress={voltarFoto}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </Pressable>

        <Pressable style={styles.botaoNav} onPress={avancarFoto}>
          <Text style={styles.textoBotao}>Próxima</Text>
        </Pressable>
      </View>

      <Foto
        imagem={fotoAtual.imagem}
        titulo={fotoAtual.titulo}
        descricao={fotoAtual.descricao}
      />

      <View style={styles.galeria}>
        {fotos.map((item, index) => (
          <Pressable
            key={`${item.imagem}-${index}`}
            onPress={() => selecionarFoto(index)}
            style={styles.botaoMini}
          >
            <Image source={{ uri: item.imagem }} style={styles.miniFoto} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function Foto(props) {
  const { imagem, titulo, descricao } = props;

  return (
    <View style={styles.fotoContainer}>
      <Image source={{ uri: imagem }} style={styles.foto} />
      <Text style={styles.tituloFoto}>{titulo}</Text>
      <Text style={styles.descricaoFoto}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0EBD8',
    paddingVertical: 30,
  },
  tituloApp: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0D1321',
  },
  navegacao: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 20,
  },
  botaoNav: {
    backgroundColor: '#1D2D44',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: '#0D1321',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  textoBotao: {
    color: '#F0EBD8',
    fontSize: 16,
    fontWeight: '600',
  },
  fotoContainer: {
    alignItems: 'center',
    backgroundColor: '#F0EBD8',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#748CAB',
  },
  foto: {
    width: 300,
    height: 200,
    borderRadius: 12,
  },
  tituloFoto: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#0D1321',
  },
  descricaoFoto: {
    marginTop: 4,
    fontSize: 14,
    color: '#3E5C76',
  },
  galeria: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '85%',
    marginTop: 25,
  },
  botaoMini: {
    margin: 6,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#748CAB',
  },
  miniFoto: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
});
