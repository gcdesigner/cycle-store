import React from 'react';

import { MyButton, TextButton } from './styles';

export default function Button({ label, onPress }) {
  return (
    <MyButton onPress={onPress}>
      <TextButton>
        {label}
      </TextButton>
    </MyButton>
  );
}
