import React from 'react';
import {BaseView} from '../../components';
import {styled} from './styles';
import {ScrollView} from 'react-native';
import {mock} from './mock';
import {HeaderComponent, RouteComponent} from './components';

const RouteScreen: React.FC = () => {
  return (
    <BaseView>
      <HeaderComponent />
      <ScrollView style={styled.body}>
        {mock.infoList.map((info, index) => (
          <RouteComponent key={index} info={info} />
        ))}
      </ScrollView>
    </BaseView>
  );
};

export default RouteScreen;
