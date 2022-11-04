import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

import useResults from "../hooks/useResults";

const SearchScreen = (props) => {
  console.log(props);

  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) =>
    results.filter((result) => result.price === price);

  return (
    <>
      <SearchBar
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        term={term}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
