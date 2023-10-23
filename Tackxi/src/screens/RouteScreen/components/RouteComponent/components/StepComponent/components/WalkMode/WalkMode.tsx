import React, {useMemo} from 'react';
import {IconLabel} from '../../../../../../../../components';
import {ModeEnum} from '../../../../../../../../enums';
import {Text, View} from 'react-native';
import {styled} from './styles';

interface WalkModeProps {
  percent: number;
  sectionTime: number;
}

const WalkMode: React.FC<WalkModeProps> = ({percent, sectionTime}) => {
  const minute = useMemo(() => {
    return Math.floor(sectionTime / 60);
  }, [sectionTime]);

  return (
    <View style={styled(percent).bar}>
      <IconLabel iconColor="#777" iconType={ModeEnum.WALK} />
      {minute > 0 && (
        <Text style={{fontSize: 12, color: 'white'}}>{minute}분</Text>
      )}
    </View>
  );
};

export default WalkMode;
