import React, {useState} from 'react';
import {BaseView, IconContainer} from '../../components';
import {Alert, TextInput, View} from 'react-native';
import {styled} from './styles';
import {BoardStore} from '../../stores';
import {Board} from '../../interface';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

interface AddBoardScreenProps {
  navigation: any;
}

const AddBoardScreen: React.FC<AddBoardScreenProps> = ({navigation}) => {
  const [boardText, setBoardText] = useState<string>('');
  const {addBoard} = BoardStore();

  return (
    <BaseView style={styled.container}>
      <View style={styled.addBoard}>
        <TextInput
          style={styled.board}
          onChangeText={text => {
            setBoardText(text);
          }}
        />
        <IconContainer
          name="enter"
          size={20}
          onPress={() => {
            if (!boardText) {
              Alert.alert('입력한 글자가 없습니다.');
              return;
            }

            Alert.alert(
              '등록',
              '등록하시겠습니까?',
              [
                {text: '취소', onPress: () => {}, style: 'cancel'},
                {
                  text: '등록',
                  onPress: () => {
                    const newBoard: Board = {
                      id: uuid(),
                      title: boardText,
                      description: boardText,
                      author: 'jimin',
                    };
                    addBoard(newBoard);
                    navigation.navigate('board');
                  },
                  style: 'destructive',
                },
              ],
              {
                cancelable: true,
                onDismiss: () => {},
              },
            );
          }}
        />
      </View>
      <IconContainer
        name="home"
        size={30}
        onPress={() => navigation.navigate('board')}
      />
    </BaseView>
  );
};

export default AddBoardScreen;
