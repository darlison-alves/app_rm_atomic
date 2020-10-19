import { colors } from "../defaults/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.main,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        
        alignContent: 'center',
        alignItems: 'center',
        paddingBottom: 25,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 25,
    },
    welcomeText: {
        alignItems:'center'
    },
    heading: {
        color: '#FFF',
        fontSize: 18
    },
    subheading: {
        color: '#FFF',
        fontSize: 18
    },
    btn: {
        marginTop: 50,
        width: 150
    }
});

export default styles;