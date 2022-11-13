// import React, { useState } from 'react';
// import {Text, View, ScrollView, Button, TouchableOpacity, TextInput, Image} from 'react-native';
// import {styles} from './styles';
// import {Gatinho} from './Components/Gatinho';

// export default function App() {
  // const [nome, setNome] = useState("")
  // const [isTrue, setIsTrue] = useState(false)

  // const handlePress = () => {
  //   // console.log("Pressionei")
  //   // alert("Pressionei")
  //   setIsTrue(!isTrue)
  // }
  
  // return (
//     <View style={styles.container}>
//       <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png"}} 
//         style={{ width: 50, height: 50}}
//       />
//       <Image source={ require('./assets/afolouLove.png')} style={{ width: 50, height: 50}}/>
//       <Image source={require('./assets/ImagemA.webp')} style={{width:50, height: 50}}/>
//       {isTrue ? <Image source={require('./assets/ImagemA.webp')} style={{width: 50, height: 50}}/> : <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png"}} style={{width: 50, height: 50}}/>}
//       <Text style={styles.texto}>Hello World!!</Text>
//       <Gatinho nome="Fubá" />
//       <Text style={styles.texto}>Input: {nome}</Text>
//       <Text style={styles.texto}>{ isTrue ? "É Verdadeiro" : "É Falso"}</Text>
// <TextInput 
//         style={{backgroundColor: "#fff", marginBottom: 20, width: '80%'}}
//         placeholder='Digite o nome do Gatinho'
//         onChangeText={setNome}
//         value={nome}
//       />
//       <Button onPress={handlePress} title="clique aqui" color="#215491" />
//       <TouchableOpacity onPress={() => handlePress()} style={styles.botao}>
//         <Text style={styles.texto}>Touchable Opacity</Text>
//       </TouchableOpacity>
//     </View>
      
  // );
// }


// import Flexbox from './views/FlexBox';

// export default function App() {
//   return (
//     <Flexbox/>
//   );
// }

// import Exercio2 from './views/Exercicio2';

// export default function App() {
//   return (
//     <Exercicio2/>
//   );
// }


// import Exercicio3 from './views/Exercicio3';

// export default function App() {
//   return (
//     <Exercicio3/>
//   );
// }

// import Exercicio4 from './views/Exercicio4';

// export default function App() {
//   return (
//     <Exercicio4/>
//   );
// }

import Desafio from './views/Desafio'

export default function App() {
  return (
    <Desafio/>
  );
}


