import React from 'react';
import { Alert } from 'react-native';
import { login } from '../../services/github/github.service';
import DialogAlert from '../components/dialog';
import { LoginGitHubWenView } from './components/login.github.webview';

export default function Home ({ route }) {

    const [code, setCode] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const [token, setToken] = React.useState('');

    React.useEffect(() => {
        if(route.params && route.params.code) {            
            login(route.params.code).then(res => {
                setToken(res.data);
                setVisible(true);
                setCode(route.params.code);                
            }).catch(err => {
                Alert.alert(err.toString());
            });
        }
    }, [route.params]);
    

    if(code) return <DialogAlert  paragraph={token} visibleprops={visible} />;

    return <LoginGitHubWenView />
}