import { StyleSheet, Text, View } from 'react-native'

const Exercicio4 = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.verde}></Text>
            <Text style={styles.verde}></Text>
            <Text style={styles.verde}></Text>
            <Text style={styles.azul}></Text>
            <Text style={styles.azul}></Text>
            <Text style={styles.azul}></Text>
            <Text style={styles.roxo}></Text>
            <Text style={styles.roxo}></Text>
            <Text style={styles.roxo}></Text>
            <Text style={styles.amarelo}></Text>
            <Text style={styles.amarelo}></Text>
            <Text style={styles.amarelo}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#313131',
    },
    verde: {
        height: "15%",
        width: "25%",
        backgroundColor: "green",
        margin: 10
    },
    azul: {
        height: "15%",
        width: "25%",
        backgroundColor: "skyblue",
        margin: 10

    },
    roxo: {
        height: "15%",
        width: "25%",
        backgroundColor: "purple",
        margin: 10

    },
    amarelo: {
        height: "15%",
        width: "25%",
        backgroundColor: "yellow",
        margin: 10
    }
});

export default Exercicio4