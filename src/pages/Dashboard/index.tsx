import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {

  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  function handleAddRepository() {

  }

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" value={newRepo} onChange={e => setNewRepo(e.target.value)} />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/32269857?s=460&u=dc405b56241e1076a724cba55f4da27b3c58502c&v=4" alt="lgmaster"/>
          <div>
            <strong>lgmaster/ecommerce</strong>
            <p>Vanilla Validator, a form validator by pure JavaScript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;