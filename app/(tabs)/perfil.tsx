import { StyleSheet, Image, Platform, ImageComponent, TextInput } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';

import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Header } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function TabTwoScreen() {
  const [idUsuario, setIdUsuario] = useState<string | null>(null);
  const [usuario, setUsuario] = useState<{ nome: string }>({ nome: 'Visitante' });

  const [text, onChangeText] = React.useState('Useless Text');
  useEffect(() => {
    const getUsuario = async () => {
      try {
        const objUsuario = await AsyncStorage.getItem('usuario');
        if (objUsuario) {
          const id = JSON.parse(objUsuario).id;
          const nome = JSON.parse(objUsuario).nome;
          if (id !== null) {
            setIdUsuario(id);
          }
          if (nome !== null) {
            setUsuario({ nome });
          }
        }
      } catch (error) {
        console.error('Erro ao obter o nome do usuário:', error);
      }
    };
    getUsuario();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.profileImage}
        />
      }>
        
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{usuario.nome}</ThemedText>
      </ThemedView>

      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  profileImage: {
    width: 300,
    height: 250,
    borderRadius: 50,
    alignSelf: 'center',
  },
});