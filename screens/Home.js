import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { Text } from "react-native";
import { FlatList, View } from "react-native";
import Header from "../components/Header";
import PostItem from "../components/PostItem";
import ProfileAuthor from "../components/ProfileAuthor";
// import { BaseStyle, useTheme } from "@config";
// import { Header, SafeAreaView, PostItem, ProfileAuthor } from "@components";
// import { useTranslation } from "react-i18next";
import Medium from "../services/Medium";
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from "react-native";

export default function Home({ navigation }) {
  //   const { colors } = useTheme();
  //   const { t } = useTranslation();

  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState([]);

  const loadPost = async () => {
    // console.log("Load");
    let p = await Medium.getPosts();
    setPosts(p);

    console.log("Load XML");
    // Medium.getPostsXML();
  };

  function cleanDescription() {
    return "HELLO";
  }

  useEffect(() => {
    loadPost();
  }, []);
  return (
    <View style={{ flex: 1 , marginBottom : 150}}>
      <View style={{ paddingTop: 25, backgroundColor: "tomato" }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Amphoe_1307.svg/250px-Amphoe_1307.svg.png",
          }}
        />
        <View style={{ paddingVertical: 5, paddingLeft: 10 }}>
          <Text style={{ fontSize: 50 / 2 }}>สามโคก</Text>
        </View>
      </View>
      <View style={{ backgroundColor : 'white', padding : 15, paddingTop : 0 , marginBottom : 10 }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#eeeeee",
            borderRadius: 30,
          }}
        >
          <FontAwesome
            style={{ padding: 15 , }}
            name="search"
            size={20}
            color={"tomato"}
          />
          <TextInput
            style={{ padding: 10, width: "90%",  }}
            placeholder="ค้นหา ..."
            onChangeText={(text) => {
              onFilterProducts(text);
            }}
          />
        </View>
      </View>
      {/* <Header title="post" /> */}
      <SafeAreaView
      // style={BaseStyle.safeAreaView}
      // edges={["right", "left", "bottom"]}
      >
        <FlatList
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            loadPost();
            setRefreshing(false);
          }}
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <PostItem
              style={{ paddingTop: 10 }}
              key={index}
              image={item.thumbnail}
              title={item.title}
              description={(() => {
                let substr = item.content.split("<p>")[1];
                return substr.substring(0, 200) + " ... ";
              })()}
              // description={cleanDescription()}
              authorName={item.author}
              authorImage={
                "https://cdn-images-1.medium.com/fit/c/36/36/0*KC4C9CrRgdxkOGsI"
              }
              pubDate={item.pubDate}
              onPress={() =>
                navigation.navigate("PostDetail", { url: item.link })
              }
            >
              {/* <ProfileAuthor
                image={
                  "https://cdn-images-1.medium.com/fit/c/36/36/0*KC4C9CrRgdxkOGsI"
                }
                name={item.author}
                description={item.pubDate}
                style={{ paddingHorizontal: 20 }}
              /> */}
            </PostItem>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
