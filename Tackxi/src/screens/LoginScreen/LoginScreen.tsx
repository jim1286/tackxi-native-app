import React from 'react';
import {BaseView, IconContainer} from '../../components';
import {TextInput, View} from 'react-native';
import {styled} from './styles';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <BaseView style={styled.container}>
      <View style={styled.login}>
        <View style={styled.input}>
          <TextInput style={styled.id} placeholder="  id" />
          <TextInput style={styled.pw} placeholder="  password" />
        </View>
        <View style={styled.button}>
          <IconContainer
            name="login"
            size={30}
            style={styled.icon}
            onPress={() => navigation.navigate('boardStack')}
          />
          <IconContainer
            name="adduser"
            size={30}
            style={styled.icon}
            onPress={() => navigation.navigate('signUp')}
          />
        </View>
      </View>
    </BaseView>
  );
};

export default LoginScreen;
