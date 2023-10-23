import React, {useMemo} from 'react';
import {IconLabel} from '../../../../../../../../components';
import {ModeEnum} from '../../../../../../../../enums';
import {Text, View} from 'react-native';
import {styled} from './styles';

interface TaxiModeProps {
  percent: number;
  sectionTime: number;
}

const TaxiMode: React.FC<TaxiModeProps> = ({percent, sectionTime}) => {
  const minute = useMemo(() => {
    return Math.floor(sectionTime / 60);
  }, [sectionTime]);

  return (
    <View style={styled(percent).bar}>
      <IconLabel iconColor="#f57c2c" iconType={ModeEnum.TAXI} />
      {minute > 0 && (
        <Text style={{fontSize: 12, color: 'white'}}>{minute}분</Text>
      )}
    </View>
  );
};

export default TaxiMode;
