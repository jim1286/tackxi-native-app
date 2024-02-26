import React, {useEffect} from 'react';
import {styled} from './style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BaseView from '../../components/BaseView';
import {TextInput, View} from 'react-native';
import IconContainer from '../../components/IconContainer';
import {DestinationStackParamList} from '../../navigator/Stacks/DestinationStack';
import {useRequestPermission} from '../../hooks';
import {useAppDispatch} from '../../redux/hook';
import {setCurrentLocation} from '../../redux/features';
import {Location} from '../../interface/map.interface';
import 'react-native-get-random-values';
import Geolocation from 'react-native-geolocation-service';

const DestinationScreen = () => {
  const dispatch = useAppDispatch();
  const destinationNavigation =
    useNavigation<NativeStackNavigationProp<DestinationStackParamList>>();
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
        console.log(pos);
        const newCurrentLocation: Location = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };

        dispatch(setCurrentLocation(newCurrentLocation));
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
