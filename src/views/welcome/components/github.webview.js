import React from 'react';
import {View} from 'react-native';
import { WebView } from "react-native-webview";

export default class GitHubWebView extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <WebView source={{ uri: 'https://github.com/darlison-alves' }} />;
  }  
}