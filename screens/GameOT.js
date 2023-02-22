import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import axios from "axios";

const GameOT = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://thronesapi.com/api/v2/Characters"
        );
        setCharacters(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
  };

  const filteredCharacters = characters.filter((character) => {
    const fullName = character.fullName.toLowerCase();
    const searchText = search.toLowerCase();
    return fullName.indexOf(searchText) > -1;
  });

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <View style={styles.characterInfo}>
          <ListItem.Title>{item.fullName}</ListItem.Title>
          <ListItem.Subtitle>{item.family}</ListItem.Subtitle>
          <ListItem.Subtitle>{item.title}</ListItem.Subtitle>
        </View>
        <Image source={{ uri: item.imageUrl }} style={styles.characterImage} />
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search Characters"
        onChangeText={handleSearch}
        value={search}
        lightTheme
        round
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
      />
      <FlatList
        data={filteredCharacters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBarContainer: {
    backgroundColor: "#fff",
    borderBottomColor: "#bbb",
    borderTopColor: "#bbb",
  },
  searchBarInputContainer: {
    backgroundColor: "#f2f2f2",
  },
  listContainer: {
    paddingBottom: 20,
  },
  characterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default GameOT;
