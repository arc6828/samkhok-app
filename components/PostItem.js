import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default function PostItem(props) {
  const {
    image,
    title,
    description,
    authorName,
    authorImage,
    pubDate,
    onPress,
  } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: "white", marginBottom: 20 }}>
        {/* ก้อนที่ 1 */}
        <View style={{ flexDirection: "row", padding: 20 }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
            source={{ uri: authorImage }}
          />
          <View style={{ paddingLeft: 10 }}>
            <Text style={{ fontSize: 20 }}>{authorName}</Text>
            <Text style={{ color: "gray" }}>{pubDate}</Text>
          </View>
        </View>
        {/* ก้อนที่ 2 */}
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ flex: 1, resizeMode: "cover", aspectRatio: 16 / 9 }}
            source={{ uri: image }}
          />
        </View>
        {/* ก้อนที่ 3 */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20 }}>{title}</Text>
          <Text style={{ color: "gray" }}>{description}</Text>
        </View>

        {/* separator */}
        {/* <View style={{ borderTopWidth:1, margin : 20 }}></View> */}
      </View>
    </TouchableOpacity>
  );
}
