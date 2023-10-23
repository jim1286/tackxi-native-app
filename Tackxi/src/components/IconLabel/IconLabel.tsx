import React, {useMemo} from 'react';
import {View} from 'react-native';
import {styled} from './styles';
import {ModeEnum} from '../../enums';
import Bus from '../../assets/Bus.svg';
import Taxi from '../../assets/Taxi.svg';
import Walk from '../../assets/Walk.svg';

interface IconLabelProps {
  iconColor: string;
  iconType: ModeEnum;
}

const IconLabel: React.FC<IconLabelProps> = ({iconColor, iconType}) => {
  const icon = useMemo(() => {
    switch (iconType) {
      case ModeEnum.BUS: {
        return <Bus />;
      }
      case ModeEnum.TAXI: {
        return <Taxi />;
      }
      case ModeEnum.WALK: {
        return <Walk />;
      }
    }
  }, [iconType]);

  return <View style={styled(iconColor).label}>{icon}</View>;
};

export default IconLabel;
