import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as color from '../theme/color';
import * as font from '../theme/font';

export const HeaderWelcomeComponent = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.cont_text}>Bienvenido a</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: color.gray,
    borderBottomWidth: 1,
    width: '100%',
  },
  cont_text: {
    fontSize: 15,
    fontFamily: font.font,
    paddingVertical: 10,
    color: color.darkBlue,
  },
});
