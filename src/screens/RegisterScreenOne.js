import React from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import {register} from '../controller/user'
import bg from '../assets/bg.png';
import logo from '../assets/text_logo.png'
import arrow from '../assets/arrow_forward.png'
const RegisterScreenOne = ({ navigation }) => {
    const state = {
        username: '',
        email: '',
        password: '',
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bg}
                source={bg}
            >
                <View
                style={styles.container}
                >
                    <Text
                        style={styles.header}
                    >Sign Up</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textField}
                        placeholder='Username'
                        color="white"
                        autoCapitalize="none"
                        placeholderTextColor='grey'
                        onChangeText={val => this.onChangeText('username', val)}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textField}
                        color="white"
                        placeholder='Email'
                        autoCapitalize="none"
                        placeholderTextColor="grey"
                        onChangeText={val => this.performSignup(val)}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textField}
                        color="white"
                        placeholder='Password'
                        autoCapitalize="none"
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        onChangeText={val => this.onChangeText('password', val)}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textField}
                        color="white"
                        placeholder='Confirm Password'
                        autoCapitalize="none"
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        onChangeText={val => this.onChangeText('password', val)}
                    />
                </View>
                <View
                    style={styles.container}
                >
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('RegisterTwo')}
                    >
                        <Image
                            style={styles.arrow}
                            source={arrow}
                        />
                    </TouchableOpacity>
                </View >
                <View
                    style={styles.container}                
                    flexDirection="row"
                >
                    <Text
                     style={styles.prompt}
                    >Already have an account? Login</Text>
                    <TouchableOpacity
                        style={styles.hereButton}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('Login')}                   
                    >
                        <Text
                            style={styles.here}
                        > here</Text>                        
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.container}
                >
                    <Image
                        style={styles.logo}
                        source={logo}
                    />

                </View>
            </ImageBackground>
        </View >
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    textField: {
        width: 350,
        height: 45,
        backgroundColor: '#222629',
        margin: 10,
        padding: 8,
        fontSize: 30,
        fontWeight: '500',
        borderColor: '#222629',
        borderBottomColor: 'white',
        borderWidth: 0.2,
    },
    fontColor: {
        color: 'wheat'
    },
    button: {
        backgroundColor: "#53900F",
        borderRadius: 100,
        width: "23%",
        height: "100%",
        alignSelf: "center",
        justifyContent: "center"
    },
    bg: {
        flex: 1,
        resizeMode: "stretch",
        justifyContent: "center",
        width: "100%",
        height: "100%"        
    },
    here:{
        color: "#FF652F",
        alignSelf: "center"
    },
    logo:{
        alignSelf: "center",
        width: "100%",
        height: "100%"
    },
    hereButton:{
        alignSelf:"center"
    },
    prompt: {
        alignSelf: "center",
        color: "white"    
    },
    arrow: {
        alignSelf: "center"
    },
    header:{
        color: "white",
        fontSize: 40,
        paddingStart: 10,
        paddingTop: 20
    }
});

export default RegisterScreenOne;