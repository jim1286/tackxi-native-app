import {Item} from '@/interface';
import React from 'react';
import {View, Text} from 'react-native';
import RenderHtml, {HTMLSource} from 'react-native-render-html';
import {styled} from './style';
import IconContainer from '../../../../components/IconContainer';

interface SearchComponentProps {
  item: Item;
}

const SearchComponent = ({item}: SearchComponentProps) => {
  const convertTitle = item.title.replace('<b>', "<b style='color: #3399FF'>");
  const source: HTMLSource = {
    html: convertTitle,
  };

  return (
    <View style={styled.container}>
      <IconContainer
        name="enviroment"
        size={25}
        iconColor={'skyblue'}
        style={styled.icon}
      />
      <View style={styled.itemInfo}>
        <RenderHtml contentWidth={200} source={source} />
        <Text style={styled.address}>{item.address}</Text>
      </View>
    </View>
  );
};

export default SearchComponent;
