import React from 'react';
import {Text, View} from 'react-native';
import {styled} from './styles';
import {StepComponent} from './components';
import {Info} from '../../../../interface/route.interface';

interface RouteComponentProps {
  info: Info;
}

const RouteComponent: React.FC<RouteComponentProps> = ({info}) => {
  return (
    <View style={styled.container}>
      <View style={styled.body}>
        <View style={styled.bodyHeader}>
          <View style={styled.textWrap}>
            <Text>{info.summary.savedMoney}원</Text>
            <View style={[styled.rowDivider]} />
            <Text>{Math.floor(info.summary.savedTime / 60)}분</Text>
          </View>
        </View>
        <View style={[styled.columnDivider, {height: 3}]} />
        <View style={styled.route}>
          {info.steps.map(step => (
            <StepComponent key={step.mode} step={step} />
          ))}
        </View>
      </View>
      <View style={styled.columnDivider} />
    </View>
  );
};

export default RouteComponent;
