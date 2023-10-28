import React from 'react';
import {BaseView} from '../../components';
import {styled} from './styles';
import {ScrollView, TouchableOpacity} from 'react-native';
import {mock} from './mock';
import {HeaderComponent, Suggestion} from './components';
import {v4 as uuid} from 'uuid';
import {SuggestionStackParamList} from '../../navigator/Stacks/SuggestionStack/SuggestionStack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SuggestionScreen: React.FC = () => {
  const suggestionNavigation =
    useNavigation<NativeStackNavigationProp<SuggestionStackParamList>>();

  const handleSuggest = () => {
    suggestionNavigation.navigate('map');
  };

  return (
    <BaseView>
      <HeaderComponent />
      <ScrollView style={styled.body}>
        {mock.infoList.map(info => (
          <TouchableOpacity onPress={handleSuggest} key={uuid()}>
            <Suggestion info={info} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </BaseView>
  );
};

export default SuggestionScreen;
