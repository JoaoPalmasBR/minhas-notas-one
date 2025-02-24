import { Image, StyleSheet, Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';


export default function HomeScreen() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        let response;
        if (Platform.OS === 'web') {
          const asset = Asset.fromModule(require('../../assets/posts.json'));
          await asset.downloadAsync();
          response = await fetch(asset.uri).then((res) => res.json());
        } else {
          const asset = Asset.fromModule(require('../../assets/posts.json'));
          await asset.downloadAsync();
          const fileUri = asset.localUri || asset.uri;
          response = await FileSystem.readAsStringAsync(fileUri);
          response = JSON.parse(response);
        }
        
        setPosts(response);
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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>

      {/* Renderize os posts aqui */}
      {posts.map((post, index) => (
        <ThemedView key={index} style={styles.postContainer}>
          <ThemedText>{post.title}</ThemedText>
          <ThemedText>{post.content}</ThemedText>
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
});