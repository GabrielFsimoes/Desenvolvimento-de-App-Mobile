import { StyleSheet, Text, View } from 'react-native'

const Desafio = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.verde}></Text>
                    <View style={styles.containerCardsColunaCima}>
                        <Text style={styles.card}></Text>
                        <Text style={styles.retangulo}></Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.roxo}></Text>
                        <Text style={styles.azul2}></Text>
                    </View>
                <Text style={styles.verde}></Text>
            </View>
            <View style={styles.containerCardsColuna}>
                <View style={styles.containerCards}> 
                    <Text style={styles.card}></Text>
                    <Text style={styles.card}></Text>
                    <Text style={styles.card}></Text>
                </View>
                <View style={styles.containerCards}> 
                    <Text style={styles.card}></Text>
                    <Text style={styles.card}></Text>
                    <Text style={styles.card}></Text>
                </View>
            </View>
            <Text style={styles.azul}></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container2:{
        flex: 1,
        alignItems: 'center'
    },
    container3:{
        flex: 1,
        flexDirection:'row',
        alignItems:'flex-end'
    },
    containerCards:{
        flex: 1,
      justifyContent: 'space-around',
      flexDirection:'row',
      alignItems:'center'
    },
    containerCardsColuna:{
        flex: 1,
        margin: 15
    },
    containerCardsColunaCima:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    verde: {
        height: 20,
        width: "100%",
        backgroundColor: "#50e3c0",
    },
    azul: {
        height: "9%",
        width: "100%",
        backgroundColor: "#5485e1",
    },
    roxo: {
        height: 70,
        width: "50%",
        backgroundColor: "#a900fd",
    },
    azul2: {
        height: 70,
        width: "50%",
        backgroundColor: "#5485e1",
    },
    card:{
        backgroundColor: "#f8a82bfd",
        height: 90,
        width: 90,
    },
    retangulo:{
        height: 30,
        width: 150,
        backgroundColor: "#f8a82bfd",
        marginTop: 25
    }
});

export default Desafio