import React, {useEffect, useState} from 'react';
import {styled} from './style';
import {View, TextInput, TouchableHighlight} from 'react-native';
import BaseView from '../../components/BaseView';
import IconContainer from '../../components/IconContainer';
import 'react-native-get-random-values';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../navigator';
import {NaverMapService} from '../../service';
import {GetSearchLocationRequest, Item} from '../../interface';
import SearchComponent from './components/SearchComponent';
import {DestinationStackParamList} from '../../navigator/Stacks/DestinationStack';

const SearchScreen = () => {
  const destinationNavigation =
    useNavigation<NativeStackNavigationProp<DestinationStackParamList>>();
  const appNavigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const [searchInput, setSearchInput] = useState<string | undefined>(undefined);
  const [searchedItems, setSearchedItems] = useState<Item[]>([]);

  useEffect(() => {
    if (!searchInput) {
      return;
    }

    const timer = setTimeout(() => {
      searchGeoCode(searchInput);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const searchGeoCode = async (search: string) => {
    const params: GetSearchLocationRequest = {
      query: '강남역',
      display: 5,
    };

    const res = await NaverMapService.getSearchLocation(params);
    setSearchedItems(res.items);
  };

  const handleBack = () => {
    destinationNavigation.navigate('destination');
  };

  const handleNavigate = () => {
    appNavigation.navigate('suggestionStack');
  };

  return (
    <BaseView style={styled.container}>
      <View style={styled.inputBox}>
        <IconContainer
          name="arrowleft"
          size={25}
          style={styled.icon}
          onPress={handleBack}
        />
        <TextInput
          style={styled.path}
          placeholder="어디로 갈까요?"
          onChangeText={e => {
            setSearchInput(e);
          }}
        />
        <IconContainer
          name="rocket1"
          size={25}
          style={styled.icon}
          onPress={handleNavigate}
        />
      </View>
      <View style={styled.listContainer}>
        {searchedItems.map(searchedItem => (
          <TouchableHighlight
            key={searchedItem.mapx}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert(searchedItem.address)}>
            <SearchComponent item={searchedItem} />
          </TouchableHighlight>
        ))}
      </View>
    </BaseView>
  );
};

export default SearchScreen;
