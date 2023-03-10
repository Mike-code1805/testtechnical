import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as color from '../theme/color';
import * as font from '../theme/font';

interface Props {
  text: string;
  backColor: string;
}

export const ButtonReportComponent = ({text, backColor}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backColor ? backColor : color.black,
        margin: 2,
        padding: 5,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: font.font,
          color: color.white,
        }}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
