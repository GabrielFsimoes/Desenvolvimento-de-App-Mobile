import { StyleSheet, Text, View } from 'react-native'

const Exercicio3 = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.verde}></Text>
            <Text style={styles.azul}></Text>
            <Text style={styles.roxo}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#313131',
    },
    verde: {
        height: 100,
        width: "25%",
        backgroundColor: "green",

    },
    azul: {
        height: 100,
        width: "25%",
        backgroundColor: "skyblue",

    },
    roxo: {
        height: 100,
        width: "25%",
        backgroundColor: "purple",

    },
});

export default Exercicio3