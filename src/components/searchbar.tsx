import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  handleSearch?: (text: string) => void;
}

/**
 * SearchBar component that provides a search input with an icon
 * @param handleSearch - Optional callback function when search text changes
 */
const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        {/* Search Input Field */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={query}
          onChangeText={(text) => {
            setQuery(text);
            handleSearch?.(text); // Using optional chaining for cleaner code
          }}
        />
        {/* Search Icon */}
        <Ionicons name="search-sharp" size={18} color="#888" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    height: 40,
  },
  searchBar: {
    fontSize: 16,
    color: '#888',
    minWidth: 100,
    textAlign: 'center',
    marginTop: 1,
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
