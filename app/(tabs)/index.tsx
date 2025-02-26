import { Image, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import { FooterComponent } from 'react-native-screens/lib/typescript/components/ScreenFooter';
import { Link } from 'expo-router';
import { styles } from './styles';


export default function HomeScreen() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://servidor-posts.onrender.com/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Origin': 'x-requested-with',
          }
        });
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

      {
        posts.map((post, index) => (
          <ThemedView key={index} style={styles.cardContainer}>
            <ThemedView style={styles.cardHeader}>
              <ThemedText type="default" style={{ color: '#FFFFFF' }}>Post #{post.id}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.cardBody}>
              <Text style={styles.title}>{post.mensagem}</Text>
              <Text href={"/post/" + post.id} style={styles.link}>Leia mais</Text>
              <Text>Usuario: {post.usuario}</Text>
            </ThemedView>
          </ThemedView>
        ))}



    </ParallaxScrollView>
  );
}


