import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        term={term}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit Pricier" />
      <ResultsList title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
