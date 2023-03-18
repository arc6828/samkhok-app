import React from 'react';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PostDetail({ route, navigation }) {
  const  link  = route.params;
  return (
    <View style={{ flex: 1 }}>      
      <SafeAreaView style={{ flex: 1 }} >
        <WebView
          source={{ uri: link.url }}
        />
      </SafeAreaView>
    </View>
  );
}