import React from 'react';
import {BaseView, IconContainer} from '../../components';
import {BoardStore} from '../../stores';
import {styled} from './styles';
import {Text, View} from 'react-native';
import {BoardComponent} from './components';

interface BoardScreenProps {
  navigation: any;
}

const BoardScreen: React.FC<BoardScreenProps> = ({navigation}) => {
  const {boards} = BoardStore();

  return (
    <BaseView style={styled.container}>
      {boards.length > 0 ? (
        <View style={styled.boardList}>
          {boards.map(board => (
            <BoardComponent key={board.id} board={board} />
          ))}
        </View>
      ) : (
        <View style={styled.empty}>
          <Text>{'등록된 글이 없습니다.'}</Text>
        </View>
      )}
      <View style={styled.icon}>
        <IconContainer
          name="plus"
          size={30}
          onPress={() => navigation.navigate('addBoard')}
        />
        <IconContainer
          name="home"
          size={30}
          onPress={() => navigation.navigate('login')}
        />
      </View>
    </BaseView>
  );
};

export default BoardScreen;
