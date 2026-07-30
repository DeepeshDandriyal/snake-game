import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/colors";

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { GestureEventType } from "../types/types";

const SNAKE_INITIAL_POSITION = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POSITION = [{ x: 5, y: 20 }];
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 63 };
const MOVE_INTERNAL = 50;
const SCORE_INCREMENT = 10;

export default function Game() {
  const handleGesture = (event: GestureEventType) => {
    const { translationX, translationY } = event;
    if (Math.abs(translationX) > Math.abs(translationY)) {
      if (translationX > 0) {
        // moving right
      } else {
        // moving left
      }
    } else {
      if (translationY > 0) {
        // moving down
      } else {
        // moving up
      }
    }
  };

  const pan = Gesture.Pan()
    .runOnJS(true)
    .onUpdate((event) => {
      handleGesture(event);
    });
  return (
    <GestureDetector gesture={pan}>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.priamry,
    flex: 1,
    paddingTop: 40,
  },
});
