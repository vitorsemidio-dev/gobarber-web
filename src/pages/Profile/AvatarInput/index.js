import React from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function AvatarInput() {
  function handleChange(e) {}
  return (
    <Container>
      <label htmlFor="avatar">
        <img src="" alt="" />

        <input
          accept="image/*"
          onChange={handleChange}
          type="file"
          id="avatar"
        />
      </label>
    </Container>
  );
}
