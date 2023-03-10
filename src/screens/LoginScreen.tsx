import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import React from 'react';
import {HeaderWelcomeComponent} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import * as color from '../theme/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useForm} from '../hooks/useForm';
import {useNavigation, CommonActions} from '@react-navigation/native';

export const LoginScreen = () => {
  const {user, password, onChange} = useForm({
    user: '',
    password: '',
  });
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const onLogin = () => {
    Keyboard.dismiss();
    console.log({user, password});
  };
  return (
    <SafeAreaView style={styles.cont}>
      <ScrollView>
        <HeaderWelcomeComponent />

        <View style={styles.cont_form}>
          <View
            style={{
              marginTop: top + 10,
              alignItems: 'center',
            }}>
            <Image source={require('../assets/logo.png')} />
          </View>

          <View style={styles.inputFieldAndroid}>
            <Icon name="person-outline" color={color.black} size={23} />
            <TextInput
              placeholder="Usuario"
              placeholderTextColor={color.black}
              selectionColor={color.blue}
              onChangeText={value => onChange(value, 'user')}
              value={user}
              onSubmitEditing={onLogin}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputField}
            />
          </View>

          <View style={styles.inputFieldAndroid}>
            <Icon name="eye-outline" color={color.black} size={23} />
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor={color.black}
              secureTextEntry
              selectionColor={color.blue}
              onChangeText={value => onChange(value, 'password')}
              value={password}
              onSubmitEditing={onLogin}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputField}
            />
          </View>

          <View style={styles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => console.log('RegisterUserScreen')}>
              <Text style={styles.buttonText}>Recordar Usuario</Text>
            </TouchableOpacity>
          </View>
        </View>

        <KeyboardAvoidingView style={styles.cont_button} behavior={'height'}>
          <View style={styles.formContainerButton}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.3}
                style={styles.button}
                onPress={() =>
                  navigation.dispatch(
                    CommonActions.navigate('MonthlyReportScreen'),
                  )
                }>
                <Text style={{...styles.buttonText, color: color.white}}>
                  Iniciar Sesión
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.newUserContainer}>
              <TouchableOpacity
                activeOpacity={0.3}
                onPress={() =>
                  navigation.dispatch(
                    CommonActions.navigate('SearchCompanyScreen'),
                  )
                }>
                <Text style={{...styles.buttonText, textAlign: 'center'}}>
                  Cambiar empresa?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cont: {flex: 1},
  cont_form: {
    flex: 3,
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginBottom: 50,
  },
  cont_button: {flex: 1},
  formContainerButton: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  label: {
    marginTop: 25,
    color: color.black,
    fontWeight: 'bold',
  },
  inputFieldAndroid: {
    flexDirection: 'row',
    borderColor: color.blueSky,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 30,
  },
  inputField: {
    color: color.black,
    maxWidth: 310,
    fontSize: 19,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: color.blueSky,
    paddingHorizontal: 45,
    paddingVertical: 15,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: color.blue,
  },
  newUserContainer: {
    marginTop: 10,
  },
});
