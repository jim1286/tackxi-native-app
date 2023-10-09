import React from 'react';
import {styled} from './styles';
import {View, Text} from 'react-native';
import {Board} from '../../../../interface';
import {IconContainer} from '../../../../components';
import {BoardStore} from '../../../../stores';

interface BoardComponentProps {
  board: Board;
}

const BoardComponent: React.FC<BoardComponentProps> = ({board}) => {
  const {deleteBoard} = BoardStore();

  return (
    <View style={styled.container}>
      <View style={styled.info}>
        <Text>{`title : ${board.title}`}</Text>
        <Text>{`description : ${board.description}`}</Text>
        <Text>{`author : ${board.author}`}</Text>
      </View>
      <IconContainer
        name="delete"
        style={styled.deleteIcon}
        onPress={() => {
          deleteBoard(board.id);
        }}
      />
    </View>
  );
};

export default BoardComponent;
