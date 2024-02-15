import React from 'react';
import {styled} from './style';
import {View, TextInput} from 'react-native';
import BaseView from '../../components/BaseView';
import IconContainer from '../../components/IconContainer';
import 'react-native-get-random-values';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DestinationStackParamList} from '../../navigator/Stacks/DestinationStack';

const SearchScreen = () => {
  const destinationNavigation =
    useNavigation<NativeStackNavigationProp<DestinationStackParamList>>();

  const handleNavigate = () => {
    destinationNavigation.navigate('destination');
  };

  return (
    <BaseView style={styled.container}>
      <View style={styled.inputBox}>
        <IconContainer
          name="arrowleft"
          size={25}
          style={styled.icon}
          onPress={handleNavigate}
        />
        <TextInput style={styled.path} placeholder="어디로 갈까요?" />
        <IconContainer name="rocket1" size={25} style={styled.icon} />
      </View>
    </BaseView>
  );
};

export default SearchScreen;
