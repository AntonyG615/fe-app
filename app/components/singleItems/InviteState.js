import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function InviteState({ image, title, ImageComponent, onPress, state }) {
  return (
    <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
      <View style={styles.container}>
        {image && <Image style={styles.profilePic} source={image} />}
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>

        <View>
          <View>
            {(state === 0 && (
              <View>
                <>
                  <MaterialCommunityIcons
                    name="clock"
                    size={25}
                    color={colors.orange}
                  />
                </>
              </View>
            )) ||
              (state === 1 && (
                <>
                  <Ionicons
                    name="checkmark-circle-sharp"
                    size={25}
                    color={colors.green}
                  />
                </>
              )) ||
              (state === 2 && (
                <>
                  <Ionicons name="close-circle-sharp" size={25} color="red" />
                </>
              ))}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },

  profilePic: {
    width: 30,
    height: 30,
    //borderRadius: 35,
  },

  details: {
    marginLeft: 10,
    flex: 1,
  },

  title: {
    fontWeight: "bold",
    paddingBottom: 5,
  },

  subTitle: {
    color: colors.mediumgrey,
  },
});

export default InviteState;
