import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState, useEffect } from "react";


export default function Post() {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<any>(null);
  const styles = StyleSheet.create({
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
    link: {
      color: '#3498db',
      textDecorationLine: 'underline',
      marginTop: 16,
    },
  });

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/JoaoPalmasBR/minhas-notas-one/refs/heads/master/assets/posts.json`);
        const data = await response.json();
        setPost(data.find((p: any) => p.id === Number(id)));
      } catch (error) {
        console.error('Erro ao carregar o post:', error);
      }
      
    }
    loadPost();
  }, [id])

  if (!post) {
    return <ThemedText>Carregando...</ThemedText>
  }

  return (
    <ThemedView style={styles.cardContainer}>
      <ThemedText style={styles.cardContainer}>{post.mensagem}</ThemedText>
      <ThemedText>Usuario: {post.usuario}</ThemedText>
      <Link href={"/"} style={styles.link}>
        <ThemedText>Voltar</ThemedText>
      </Link>
    </ThemedView>
  );
}