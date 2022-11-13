import { StyleSheet, Text, View } from 'react-native'

const Flexbox = () =>{
    return(
        <View style={styles.container}>
            {/* <Text style={styles.texto}>Flexbox</Text> */}
            {/* <Text style={styles.superior}></Text> */}
            <Text style={styles.meio}></Text>
            {/* <Text style={styles.inferior}></Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#313131',
    },
    texto: {
        color: '#fff',
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 100
    },
    superior: {
        height: 50,
        width: 50,
        backgroundColor: "powderblue"
    },
    meio: {
        height: "100%",
        width: 100,
        backgroundColor: "skyblue",

    },
    inferior: {
        height: 150,
        width: 150,
        backgroundColor: "steelblue"
    }
});

export default Flexbox