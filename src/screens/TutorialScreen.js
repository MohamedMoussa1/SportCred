import React from 'react';
import { View, Button, StyleSheet, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { useNavigation } from '@react-navigation/native';

export default class TutorialScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          tutorialTitle: ["Here's some stuff you should know before you get started",
                          "What is SportCred?", "What is ACS?"],

          tutorialDescription: ["",
          "We’re a one-stop shop to satisfy all your sporting urges! We use an ACS system to rank" +
          " users based on their sporting knowledge. Gain points by engaging in debates with your" +
          " fellow users, making picks and predictions about NBA games and playing trivia! We’ve " +
          "got it all and we can’t wait for you to check it out!",
          "ACS stands for Analytical Credibility Score which is our way of ranking users" +
           "and dividing them into categories from inexperienced to experts. ACS is divided into 4 categories" +
           "- Fanalyst, Analyst, Pro Analyst and Expert Analyst. Engage in debates," +
           "trivia and picks and predictions to improve your score!"],

          currentPage: 0
      }

      this.nextPage = this.nextPage.bind(this);
      this.previousPage = this.previousPage.bind(this);
      this.isOnFinal = this.isOnFinal.bind(this);
      this.isOnFirst = this.isOnFirst.bind(this);
    }

    isOnFinal() {
      if (this.state.currentPage == this.state.tutorialTitle.length - 1) {
        return null;
      } else {
        return <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.7}
          onPress={this.nextPage}
          id="nextTut">

          <NavigateNextIcon/>
        </TouchableOpacity>
      }
    }

    isOnFirst() {
      if (this.state.currentPage == 0) {
        return null;
      } else {
        return <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.7}
            onPress={this.previousPage}
            id="prevTut">

            <NavigateBeforeIcon/>
          </TouchableOpacity>
      }
    }

    nextPage() {
      if (this.state.currentPage < this.state.tutorialTitle.length - 1) {
        this.setState({
          currentPage: this.state.currentPage + 1
        });
      }
    }

    previousPage() {
      if (this.state.currentPage > 0) {
        this.setState({
          currentPage: this.state.currentPage - 1
        });
      }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.backButtonContainer}>

                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('RegisterTwo')}>
                    <NavigateBeforeIcon/>

                  </TouchableOpacity>

                </View>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://d1b10bmlvqabco.cloudfront.net/paste/kf05ebzn2ak3tv/abda1cb94d7e929d15fd4136fe247b988cd40576b35379452c568829c23b16a0/image.png',
                    }}
                />
                <View style={styles.textField}>
                    <Text style={styles.title}>
                        {this.state.tutorialTitle[this.state.currentPage]}
                    </Text>
                </View>

                <View style={styles.textField}>
                    <Text style={styles.textField}>
                        {this.state.tutorialDescription[this.state.currentPage]}
                    </Text>
                </View>
                <View
                  style={styles.navButtonContainer}
                  justifyContent="flex-start"
                  flex="1">

                    {this.isOnFirst()}

                    {this.isOnFinal()}

                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: '#222629',
    },
    title: {
        width: 450,
        height: 200,
        color: '#E5E5E5',
        backgroundColor: '#222629',
        margin: 10,
        padding: 10,
        fontSize: 32,
    },
    textField: {
        width: 450,
        height: 400,
        color: '#E5E5E5',
        backgroundColor: '#222629',
        margin: 10,
        padding: 10,
        fontSize: 20,
    },
    fontColor: {
        color: 'wheat'
    },
    headline: {
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        width: 500,
        backgroundColor: 'yellow',
    },
    logo: {
        margin: "50px",
        width: 250,
        height: 200,
        margin: "auto"
    },
    navButtonContainer: {
      display: "flex",
      flexDirection: "row"
    },
    buttonContainer: {
      // backgroundColor: "darkorange",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      margin: 10
    },
    buttonText: {
      fontSize: 20,
      color: "black",
      alignSelf: "center",
    },
    backButtonContainer: {
      // backgroundColor: "lightblue",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
    }
});
