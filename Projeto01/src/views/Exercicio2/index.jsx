import { StyleSheet, Text, View } from 'react-native'

const Exercio3 = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.meio}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#313131',
    },
    meio: {
        height: 100,
        width: "100%",
        backgroundColor: "skyblue",

    }
});

export default Exercio3