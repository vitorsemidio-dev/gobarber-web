import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SingUp() {
  function handleSumit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Logo GoBarber" />

      <Form onSubmit={handleSumit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
