import React from 'react';
import { WebView } from 'react-native-webview';
import { styles } from './styles';

const supportedURL = "https://github.com/login/oauth/authorize?client_id=1807911210e3fdf51e84&login=";

export class LoginGitHubWenView extends React.Component {
    constructor() {
      super();
    }
    render() {
      return <WebView 
        style={
            styles.container
        }
        avaScriptEnabled={false}
        domStorageEnabled={true}
        source={{ uri: supportedURL }}
        />;
    }  
}
  