import React from 'react';
import {BaseView, IconContainer} from '../../components';
import {TextInput, View} from 'react-native';
import {styled} from './styles';

interface SignUpScreenProps {
  navigation: any;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  return (
    <BaseView style={styled.container}>
      <View style={styled.login}>
        <View style={styled.input}>
          <TextInput style={styled.id} placeholder="  id" />
          <TextInput style={styled.pw} placeholder="  password" />
        </View>
        <View style={styled.button}>
          <IconContainer
            name="back"
            size={30}
            style={styled.icon}
            onPress={() => navigation.navigate('login')}
          />
          <IconContainer
            name="adduser"
            size={30}
            style={styled.icon}
            onPress={() => navigation.navigate('login')}
          />
        </View>
      </View>
    </BaseView>
  );
};

export default SignUpScreen;
