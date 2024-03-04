import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },

  bold: {
    fontWeight: theme.fontWeights.bold,
  },

  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  title: {
    fontSize: theme.fontSizes.grande,
    fontWeight: theme.fontWeights.bold,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default function StyledText({
  align,
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const TextStyles = [
    styles.text,
    align == "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    fontSize === "grande" && styles.title,
    style,
  ];
  return <Text style={TextStyles}>{children}</Text>;
}
