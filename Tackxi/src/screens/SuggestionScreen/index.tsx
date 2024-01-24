import React from 'react';
import {styled} from './styles';
import {ScrollView, TouchableOpacity} from 'react-native';
import {mock} from './mock';
import {v4 as uuid} from 'uuid';
import {SuggestionStackParamList} from '../../navigator/Stacks/SuggestionStack/SuggestionStack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SuggestionStore} from '../../stores';
import HeaderComponent from './components/HeaderComponent';
import BaseView from '../../components/BaseView';
import Suggestion from './components/Suggestion';

const SuggestionScreen: React.FC = () => {
  const suggestionNavigation =
    useNavigation<NativeStackNavigationProp<SuggestionStackParamList>>();
  const {setInfoId} = SuggestionStore();

  const handleSuggest = (index: number) => {
    suggestionNavigation.navigate('map');
    setInfoId(index);
  };

  return (
    <BaseView>
      <HeaderComponent />
      <ScrollView style={styled.body}>
        {mock.infoList.map((info, index) => (
          <TouchableOpacity
            key={uuid()}
            activeOpacity={1}
            onPress={() => handleSuggest(index)}>
            <Suggestion info={info} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </BaseView>
  );
};

export default SuggestionScreen;
