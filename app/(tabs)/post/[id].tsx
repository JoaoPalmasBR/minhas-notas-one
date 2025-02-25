import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from 'expo-router';

export default function Post() {
  const { id } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tela de detalhes do produto com id={id}</Text>
    </View>
  );
}