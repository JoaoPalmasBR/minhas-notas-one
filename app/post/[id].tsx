import { StyleSheet, TouchableOpacity } from "react-native";
import { Link, useLocalSearchParams } from 'expo-router';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


export default function Post() {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<any>(null);
  const navigation = useNavigation();
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
      <ThemedView style={styles.link}>
        <Link href="/">
          <ThemedText>Voltar</ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}