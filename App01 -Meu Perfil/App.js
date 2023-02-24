import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

class App extends Component{
  render(){
    return(

      <View>

            <View style={{alignItems:'center', justifycontetnt: 'center'}}>
              <Image
                source={{ uri:'https://avatars.githubusercontent.com/u/92961406?v=4'}}
                style={styles.imagem}
              />
            </View>


       
            <Text style={styles.titulos}>
            Dados pessoais:</Text>
              <View style={{margin: 5}}>
                  <Text style={styles.dadosPessoais}>Nome: Gabriel dos Santos Santana 
                  </Text>
                  <Text style={styles.dadosPessoais}>Idade: 19 anos 
                  </Text>
                  <Text style={styles.dadosPessoais}>Cidade: Itanhaém, SP 
                  </Text>
              </View>


            <Text style={styles.titulos}>
            Formação:</Text>
              <View style={{margin: 5}}>
                  <Text style={styles.titulos}>ETEC Itanháem 
                  </Text>
                  <Text style={styles.formacao}>ETIM-Informática para Internet 2018-2020 
                  </Text>
                  <Text style={styles.titulos}>FATEC-PG
                  </Text>
                  <Text style={styles.formacao}>Análise e Desenvolvimento de Sistemas 2021-2023
                  </Text>
              </View>


            <Text style={styles.titulos}>
            Projetos</Text>
              <View style={{margin: 0}}>
                  <Text style={{color: '#00bfff',fontSize: 20, margin: 5}}>TCC 
                  </Text>
                  <Text style={{fontSize: 20, margin: 5, paddindBottom:15}}>https://github.com/Gabriels21/TCC-Trampo-Certo 
                  </Text>
                  <Text style={{color: '#00bfff',fontSize: 20, margin: 5}}>GitHub
                  </Text>
                  <Text style={{fontSize: 20, margin: 5}}>https://github.com/Gabriels21
                  </Text>
              </View>

      </View>
    )
  }
}


export default App;

const styles = StyleSheet.create({

  titulos: {
    color: '#00bfff',
    fontSize: 25,
    margin: 15
  },

  imagem: {
    width: 250, 
    height: 250, 
    borderRadius: 150
  },

  dadosPessoais: {
    fontSize: 20, 
    margin: 5
  },

  formacao: {
    fontSize: 20, 
    margin: 5
  }

});