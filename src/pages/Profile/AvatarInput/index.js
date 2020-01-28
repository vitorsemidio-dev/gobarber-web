import React, { useState, useRef } from 'react';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const { id, url } = await api.post('files', data);

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img src="" alt="" />

        <input
          accept="image/*"
          onChange={handleChange}
          type="file"
          id="avatar"
          data-file={file}
          ref={ref}
        />
      </label>
    </Container>
  );
}
