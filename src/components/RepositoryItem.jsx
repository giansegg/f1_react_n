import React from "react";
import { View, Image, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import RepositoryStats from "./RepositoryStats.jsx";
import theme from "../theme.js";

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  link,
  fullname,
  description,
  language,
}) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingright: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1, paddingLeft: 10 }}>
      <StyledText fontSize="grande" fontWeight="bold">
        {link}
      </StyledText>
      <StyledText fontWeight="bold">{fullname}</StyledText>
      <StyledText color={"secondary"}> {description}</StyledText>
      <StyledText style={styles.language}> {language}</StyledText>
    </View>
  </View>
);
const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },

  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
