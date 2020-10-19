import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    marginTop: (Platform.OS) === 'ios' ? 20 : 0 },
});