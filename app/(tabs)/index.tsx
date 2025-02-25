import { Image, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import { FooterComponent } from 'react-native-screens/lib/typescript/components/ScreenFooter';


export default function HomeScreen() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/JoaoPalmasBR/minhas-notas-one/refs/heads/master/assets/posts.json');
        const data = await response.json();
        //console.table(data);
        setPosts(data);
      } catch (error) {
        console.error('Erro ao carregar os posts:', error);
      }
    };
    loadPosts();
  }, []);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={{ uri: 'https://placehold.co/518x316/000000/FFFFFF/png?text=Minhas+notas' }}
          style={styles.reactLogo}
        />
      }>

      {//posts.map((post, index) => (
        
        //<ThemedView key={index} style={styles.postContainer}>
          //<ThemedText>Post ID: {post.id}</ThemedText>
          //<ThemedText>Mensagem: {post.mensagem}</ThemedText>
          //<ThemedText>Usuario: {post.usuario}</ThemedText>
        //</ThemedView>
      //))
      }  
      {
      posts.map((post, index) => (
        <ThemedView key={index} style={styles.cardContainer}>
          <ThemedView style={styles.cardHeader}>
            <ThemedText type="default">Post #{post.id}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.cardBody}>
            <ThemedText type="title">{post.mensagem}</ThemedText>
            <ThemedText>Usuario: {post.usuario}</ThemedText>
          </ThemedView>
        </ThemedView>
      ))}

      
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 375,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
    cardContainer: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    padding: 16,
    backgroundColor: '#3498db',
  },
  cardBody: {
    padding: 16,
  },
});