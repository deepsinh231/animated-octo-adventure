import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '@components/core/ListItem';
import { Platform } from 'react-native';

const list = [...Array(20)].map((item, index) => index + 1)
const listname = ["Font Istall", "onboarding", "Markdown", "Animation", "Map", "Audio Recod"]
export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === "web" ?
        <FlatList
          data={list}
          numColumns={3}
          columnWrapperStyle={styles.column}
          contentContainerStyle={styles.content}
          renderItem={({ item }) => <ListItem listname={listname} item={item} />}
        /> :
        <FlatList
          data={list}
          numColumns={2}
          columnWrapperStyle={styles.column}
          contentContainerStyle={styles.content}
          renderItem={({ item }) => <ListItem listname={listname} item={item} />}
        />
      }
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: "PlaywriteES-Regular",
  },

  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },

});
