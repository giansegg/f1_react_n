import React from "react";
import { FlatList, View, Text } from "react-native";
import repositories from "../data/Repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => <RepositoryItem {...item} />}
    />
  );
};
export default RepositoryList;
