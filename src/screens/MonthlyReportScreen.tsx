import {
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ButtonReportComponent} from '../components';
import * as color from '../theme/color';
import {LineChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export const MonthlyReportScreen = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 99, 43],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: color.white,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: color.white,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    barPercentage: 0.5,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <ButtonReportComponent text="General" backColor={color.yellow} />
          <ButtonReportComponent text="Sucursal" backColor={color.blue} />
        </View>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <ButtonReportComponent text="Mensual" backColor={color.orange} />
          <ButtonReportComponent text="Semanal" backColor={color.blueSky} />
        </View>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
