import React from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge, NotificationsList, Notification } from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationsList>
        <Notification unread>
          <p>Você possui um novo agendamento</p>
          <time>Há dois dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        <Notification>
          <p>Você possui um novo agendamento</p>
          <time>Há dois dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        <Notification>
          <p>Você possui um novo agendamento</p>
          <time>Há dois dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
      </NotificationsList>
    </Container>
  );
}
