import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText.jsx";

const parseNumber = (number) => {
  if (number < 1000) {
    return number;
  } else {
    return (number / 1000).toFixed(1) + "k";
  }
};

const RepositoryStats = (props) => (
  <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
    <View>
      <StyledText align="center" fontWeight={"bold"}>
        Stars{" "}
      </StyledText>
      <StyledText align="center">
        {parseNumber(props.stargazersCount)}
      </StyledText>
    </View>
    <View>
      <StyledText align="center" fontWeight={"bold"}>
        Forks{" "}
      </StyledText>
      <StyledText align="center">{parseNumber(props.forksCount)}</StyledText>
    </View>
    <View>
      <StyledText align="center" fontWeight={"bold"}>
        Review{" "}
      </StyledText>
      <StyledText align="center">{parseNumber(props.reviewCount)}</StyledText>
    </View>
    <View>
      <StyledText align="center" fontWeight={""}>
        Raiting{" "}
      </StyledText>
      <StyledText align="center">{parseNumber(props.ratingAverage)}</StyledText>
    </View>
  </View>
);

export default RepositoryStats;
