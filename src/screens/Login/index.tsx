import React, { useState } from "react"
import {View, KeyboardAvoidingView, Text, Alert} from "react-native"
import {styles} from './styles'
import { MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons'; 
import { colors } from "../../styles/colors";
import {TextInput} from "react-native-gesture-handler";
import {ComponentButtonInterface} from "../../components"
import {LoginTypes} from "../../navigations/login.navigation"
import { AxiosError } from "axios";
import { useAuth } from "../../hooks/auth";
import { IAuthenticate } from "../../services/data/User";
export interface IErrorApi {
  errors: {
    rule: string
    field: string
    message: string
  }[]
}
export function Login({navigation}: LoginTypes){
    const {signIn} = useAuth();
    const [data,setData] = useState<IAuthenticate>();
    const [isLoading, setIsLoading] = useState(true);
    async function handleSignIn(){
        try {
            setIsLoading(true);
            if (data?.email && data.password) {
                await signIn(data);
            } else {
                Alert.alert("Preencha todos os campos!!!");
                setIsLoading(false);
            }
        } catch (error) {
            const err = error as AxiosError;
            const message = err.response?.data as string 
            Alert.alert(message)
            setIsLoading(false);
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
              <Text style={styles.title}>Login</Text>  
              <View style={styles.formRow}>
                <MaterialIcons name="email" style={styles.icon} />
                <TextInput
                    placeholder="email"
                    placeholderTextColor={colors.primary}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                />
              </View>
              <View style={styles.formRow}>
              <Entypo name="key" style={styles.icon} />
              <TextInput
                placeholder="senha"
                placeholderTextColor={colors.primary}
                secureTextEntry={true}
                autoCapitalize="none"
                style={styles.input}  
                />
                </View>
                <ComponentButtonInterface title="Entrar" type="primary" onPressI={() => {navigation.navigate('Tab')}} />
                <ComponentButtonInterface title="Cadastrar" type="primary" onPressI={() => {navigation.navigate('Cadastrar')}} />
            </KeyboardAvoidingView>
        </View>
    )
}
