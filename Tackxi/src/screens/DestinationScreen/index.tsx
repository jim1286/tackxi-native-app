import React, {useEffect, useState} from 'react';
import {styled} from './style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BaseView from '../../components/BaseView';
import {TextInput, View} from 'react-native';
import IconContainer from '../../components/IconContainer';
import {DestinationStackParamList} from '../../navigator/Stacks/DestinationStack';
import 'react-native-get-random-values';
import {useRequestPermission} from '../../hooks';
import Geolocation, {GeoCoordinates} from 'react-native-geolocation-service';

const DestinationScreen = () => {
  const destinationNavigation =
    useNavigation<NativeStackNavigationProp<DestinationStackParamList>>();
  const [location, setLocation] = useState<GeoCoordinates | undefined>(
    undefined,
  );
  const requestPermission = useRequestPermission();

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    const permission = await requestPermission();

    if (permission !== 'granted') {
      return;
    }

    Geolocation.getCurrentPosition(
      pos => {
        setLocation(pos.coords);
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 3600,
        maximumAge: 3600,
      },
    );
  };

  console.log(location);

  const handleNavigate = () => {
    destinationNavigation.navigate('search');
  };

  return (
    <BaseView style={styled.container}>
      <View style={styled.inputBox}>
        <TextInput
          style={styled.path}
          placeholder="어디로 갈까요?"
          onPressIn={handleNavigate}
        />
        <IconContainer
          name="rocket1"
          size={25}
          style={styled.icon}
          onPress={handleNavigate}
        />
      </View>
    </BaseView>
  );
};

export default DestinationScreen;
