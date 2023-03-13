import {
  TextInput,
  View,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as color from '../theme/color';
import * as font from '../theme/font';
import {useForm} from '../hooks/useForm';
import {HeaderWelcomeComponent} from '../components/HeaderWelcomeComponent';
import {useNavigation, CommonActions} from '@react-navigation/native';

export const SearchCompanyScreen = () => {
  const {ruc, onChange} = useForm({
    ruc: '',
  });
  const navigation = useNavigation();

  const onLogin = () => {
    Keyboard.dismiss();
    console.log({ruc});
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <HeaderWelcomeComponent />
        <View
          style={{
            paddingTop: 250,
            justifyContent: 'center',
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              color: color.black,
              fontFamily: font.font,
              fontSize: 22,
            }}>
            Ingrese RUC
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderColor: color.blueSky,
              alignItems: 'center',
              paddingHorizontal: 10,
              borderWidth: 2,
              borderRadius: 10,
              marginTop: 5,
              marginBottom: 20,
            }}>
            <TextInput
              placeholder="20527677506"
              placeholderTextColor={color.gray}
              selectionColor={color.blue}
              onChangeText={value => onChange(value, 'ruc')}
              value={ruc}
              onSubmitEditing={onLogin}
              autoCapitalize="none"
              autoCorrect={false}
              style={{
                color: color.black,
                maxWidth: 350,
                minWidth: 300,
                fontSize: 14,
              }}
            />
          </View>
          <Text
            style={{color: color.black, fontFamily: font.font, fontSize: 22}}>
            Dirección
          </Text>
          <Text
            style={{
              color: color.black,
              fontFamily: font.font,
              marginBottom: 100,
              fontSize: 22,
            }}>
            Nombre comercial
          </Text>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 30,
              justifyContent: 'center',
              // marginBottom: 20,
              // paddingTop: 100,
            }}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 30,
              }}>
              <TouchableOpacity
                activeOpacity={0.3}
                style={{
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
                }}
                onPress={() =>
                  navigation.dispatch(CommonActions.navigate('LoginScreen'))
                }>
                <Text
                  style={{
                    fontSize: 20,
                    color: color.white,
                  }}>
                  Entrar al Sistema
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
