import React from 'react';
import {BaseView} from '../../components';
import {Button, TouchableOpacity, View} from 'react-native';
import {styled} from './style';
import {TransportationStore} from '../../stores';
import {Transportation} from '../../interface';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {
  IconBike,
  IconBus,
  IconCar,
  IconScooter,
} from 'tabler-icons-react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../navigator/AppStack';

const TransportationScreen = () => {
  const appNavigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const {transportationList, addTransportation, deleteTransportation} =
    TransportationStore();

  const handleIconClick = (name: string) => {
    const clickedTransportation: Transportation = {
      id: uuid(),
      name,
    };
    const isInclude = transportationList.find(
      transportation => transportation.name === clickedTransportation.name,
    );

    if (isInclude) {
      deleteTransportation(clickedTransportation);
      return;
    }

    addTransportation(clickedTransportation);
  };

  const handleNavigate = () => {
    appNavigation.navigate('suggestionStack');
  };

  return (
    <BaseView style={styled.container}>
      <View style={styled.icon}>
        <View style={styled.iconWrap}>
          <TouchableOpacity
            onPress={() => {
              handleIconClick('bus');
            }}>
            <IconBus size={100} style={styled.iconStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleIconClick('taxi');
            }}>
            <IconCar size={100} style={styled.iconStyle} />
          </TouchableOpacity>
        </View>
        <View style={styled.iconWrap}>
          <TouchableOpacity
            onPress={() => {
              handleIconClick('bike');
            }}>
            <IconBike size={100} style={styled.iconStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleIconClick('scooter');
            }}>
            <IconScooter size={100} style={styled.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
      <Button title="경로 보기" onPress={handleNavigate} />
    </BaseView>
  );
};

export default TransportationScreen;
