import React, { useState, useMemo } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>
            08:00
            <span>Angel</span>
          </strong>
        </Time>
        <Time available>
          <strong>
            09:00
            <span>Em aberto</span>
          </strong>
        </Time>
        <Time>
          <strong>
            10:00
            <span>Frawio</span>
          </strong>
        </Time>
        <Time>
          <strong>
            11:00
            <span>Michelle</span>
          </strong>
        </Time>
      </ul>
    </Container>
  );
}
