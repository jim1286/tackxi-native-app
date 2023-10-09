import React, {useState} from 'react';
import {BaseView, IconContainer} from '../../components';
import {TextInput, View} from 'react-native';
import {styled} from './styles';
import {SignInInfo} from '../../interface';
import {AuthService, TokenService} from '../../service';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [userInfo, setUserInfo] = useState<SignInInfo>({
    userId: '',
    password: '',
  });

  const handleSignIn = async () => {
    if (!userInfo.userId || !userInfo.password) {
      return;
    }

    try {
      const token = await AuthService.signIn(userInfo);
      TokenService.setTokens(token);

      navigation('boardStack');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BaseView style={styled.container}>
      <View style={styled.login}>
        <View style={styled.input}>
          <TextInput
            style={styled.id}
            placeholder="  id"
            onChangeText={e => {
              setUserInfo(prev => ({...prev, userId: e}));
            }}
          />
          <TextInput
            style={styled.pw}
            placeholder="  password"
            onChangeText={e => {
              setUserInfo(prev => ({...prev, password: e}));
            }}
          />
        </View>
        <View style={styled.button}>
          <IconContainer
            name="login"
            size={30}
            style={styled.icon}
            onPress={handleSignIn}
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
