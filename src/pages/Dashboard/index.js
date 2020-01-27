import React from 'react';
import api from '~/services/api';

import Profile from '~/pages/Profile';

// import { Container } from './styles';

export default function Dashborard() {
  api.get('appointments');
  return <Profile />;
}
