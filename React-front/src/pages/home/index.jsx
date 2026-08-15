import './style.css'
import api from '../../services/api.js'
// hooks
// useEffect -> Inicia sempre que a pagina carrega
// useState -> Permite user uma variavel para mudar coisas na tela em tempo real
// useRef -> Permite usar um elemento como referencia e capturar informacoes dele
import { useEffect, useState, useRef } from 'react'

import { Trash } from 'react-bootstrap-icons'

function Home() {
  // Definindo users como um estado, que inicia como sendo um array vazio
  const [users, setUsers] = useState([])
  
  const inputNome = useRef()
  const inputEmail = useRef()
  const inputIdade = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/users')
    // Alterando o estado de users
    setUsers(usersFromApi.data)
  }
  
  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)

    getUsers()
  }

  async function createUsers() {
    await api.post('/users', {
      nome: inputNome.current.value,
      email: inputEmail.current.value,
      idade: inputIdade.current.value
    })

    getUsers()
  }

  // Roda sempre que a pagina carrega
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <section className='d-flex flex-column align-items-center gap-4 mt-5 mb-5'>

      <div className='card shadow p-4'>
        <div className='card-body'>
          <form className='d-flex flex-column gap-3' action='post'>
            <h1 className='fs-2 fw-bold'>Cadastro de usuários</h1>

            <input name='nome' type='text' className='input rounded-pill p-2' placeholder='Nome' ref={inputNome}/>
            <input name='email' type='text' className='input rounded-pill p-2' placeholder='E-mail' ref={inputEmail}/>
            <input name='idade' type='text' className='input rounded-pill p-2' placeholder='Idade' ref={inputIdade}/>
            
            <button type='button' onClick={createUsers} className='rounded-pill btn btn-primary p-3 mt-4'>Cadastrar</button>
          </form>
        </div>
      </div>
    
    { users.map((user) => (
      <div key={user.id} className='card shadow p-4'>
        <div className='card-body d-flex justify-content-between'>
          <div className='d-flex flex-column'>
            <span>Nome: {user.nome}</span>
            <span>E-mail: {user.email}</span>
            <span>Idade: {user.idade}</span>
          </div>
          
          <button className='btn btn-danger' onClick={() => deleteUsers(user.id)}><Trash size={20}/></button>
        </div>
      </div>
    )) }

    </section>
  )
}

export default Home
