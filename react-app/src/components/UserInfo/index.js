import React, { useState } from "react";

import { Content, Left, Right } from "./UserInfo.styles";

const UserInfo = ({ user }) => {

  const [ nome, setNome ] = useState(user.nome);
  const [ sobrenome, setSobrenome ] = useState(user.sobrenome);
  const [ email, setEmail ] = useState(user.email);
  const [ sexo, setSexo ] = useState(user.sexo);
  const [ data, setData ] = useState(user.nascimento);
  const [ endereco, setEndereco ] = useState(user.endereco);
  const [ ddd, setDdd ] = useState(user.ddd);
  const [ telefone, setTelefone ] = useState(user.telefone);
  const [ password, setPassword ] = useState(null);

  const [ salvo, setSalvo ] = useState(false);

  const saveChanges = () => {
    user.name = nome;
    user.sobrenome = sobrenome;
    user.email = email;
    user.sexo = sexo;
    user.nascimento = data;
    user.endereco = endereco;
    user.ddd = ddd;
    user.telefone = telefone;

    if (password !== null) {
      user.password = password;
    }

    setSalvo(true);
  }

  return (
    <Content>
      <Left>
        <p>
          Nome
        </p>
        <p>
          Sobrenome
        </p>
        <p>
          Email
        </p>
        <p>
          Sexo
        </p>
        <p>
          Data
        </p>
        <p>
          Endereço
        </p>
        <p>
          Telefone
        </p>
        <p>
          Nova Senha
        </p>
      </Left>

      <Right>
        <input 
          type="text" 
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
            setSalvo(false);
          }}
        />
        <br/>
        <input 
          type="text" 
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value);
            setSalvo(false);
          }}
        />
        <br/>
        <input 
          type="email" 
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setSalvo(false);
          }}
        />
        <br/>
        <select id='sexo' onChange={(event) => {
            setSexo(event.target.value);
            setSalvo(false);
          }}>
          <option key='masc' value='masculino' selected={sexo==='masculino'}>Masculino</option>
          <option key='fem' value='feminino' selected={sexo==='feminino'}>Feminino</option>
          <option key='out' value='outro' selected={sexo==='outro'}>Outro</option>
        </select>
        <br/>
        <select id='dia' onChange={(event) => {
          var dat = data.split('-');
          var newDat = event.target.value + '-' + dat[1] + '-' + dat[2];
          setData(newDat);
          setSalvo(false);
        }}>
          {[...Array(31).keys()].map(dia => (
            <option 
              key={dia}
              value={dia+1} 
              selected={(data.split('-')[0])===''+(dia+1)}
            >
              {dia+1}
            </option>
          ))}
        </select>
        <select id='mes' onChange={(event) => {
          var dat = data.split('-');
          var newDat = dat[0] + '-' + event.target.value + '-' + dat[2];
          setData(newDat);
          setSalvo(false);
        }}>
          {[...Array(12).keys()].map(mes => (
            <option 
              key={mes}
              value={mes+1}
              selected={(data.split('-')[1])===''+(mes+1)}
            >
              {mes+1}
            </option>
          ))}
        </select>
        <select id='ano' onChange={(event) => {
          var dat = data.split('-');
          var newDat = dat[0] + '-' + dat[1] + '-' + event.target.value;
          setData(newDat);
          setSalvo(false);
        }}>
          {[...Array(60).keys()].map(ano => (
            <option
              key={ano}
              value={ano+1960}
              selected={(data.split('-')[2])===''+(ano+1960)}
            >
              {ano+1960}
            </option>
          ))}
        </select>
        <br/>
        <input 
          id='endereco'
          type="text" 
          value={endereco}
          placeholder='Endereço'
          onChange={(event) => {
            setEndereco(event.target.value);
            setSalvo(false);
          }}
        />
        <br/>
        <input 
          id='ddd'
          type="number" 
          value={ddd}
          placeholder='16'
          onChange={(event) => {
            if (event.target.value < 100) {
              setDdd(event.target.value);
              setSalvo(false);
            }
          }}
        />
        <input 
          id='tel'
          type="tel" 
          value={telefone}
          placeholder='999999999' 
          onChange={(event) => {
            if (event.target.value < 1000000000) {
              setTelefone(event.target.value);
              setSalvo(false);
            }
          }}
        />
        <br/>
        <input 
          id='pass'
          type="password" 
          placeholder='*********'
          onChange={(event) => {
            setPassword(event.target.value);
            setSalvo(false);
          }}
        />
        <br/>
        <button onClick={saveChanges}>
          Salvar
        </button>
        {salvo && (
            <h2>
              Alterações Salvas!
            </h2>
          )}
      </Right>
    </Content>
  )
};

export default UserInfo;
