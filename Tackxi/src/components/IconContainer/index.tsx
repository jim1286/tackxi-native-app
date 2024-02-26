import React from 'react';
import {ColorValue, StyleProp, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface IconProps {
  name: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  iconColor?: ColorValue | number;
  onPress?: () => void;
}

const IconContainer: React.FC<IconProps> = ({
  name,
  size,
  style,
  iconColor,
  onPress,
}) => {
  return (
    <View style={style}>
      <Icon name={name} size={size} color={iconColor} onPress={onPress} />
    </View>
  );
};

export default IconContainer;
