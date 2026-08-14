import './style.css'
import { Trash } from 'react-bootstrap-icons'

function Home() {
  const users = [
    {
      id: '1',
      nome: 'Guilherme Zika',
      idade: '19',
      email: 'Guidobrito@gmail.com'
    },
    {
      id: '2',
      nome: 'Joao de Barro',
      idade: '15',
      email: 'barroso@gmail.com'
    },
  ]

  return (
    <section className='d-flex flex-column align-items-center gap-4 mt-5 mb-5'>

      <div className='card shadow p-4'>
        <div className='card-body'>
          <form className='d-flex flex-column gap-3' action='post'>
            <h1 className='fs-2 fw-bold'>Cadastro de usuários</h1>

            <input name='nome' type='text' className='input rounded-pill p-2' placeholder='Nome'/>
            <input name='email' type='text' className='input rounded-pill p-2' placeholder='E-mail'/>
            <input name='idade' type='text' className='input rounded-pill p-2' placeholder='Idade'/>
            
            <button type='button' className='rounded-pill btn btn-primary p-3 mt-4'>Cadastrar</button>
          </form>
        </div>
      </div>
      
    { users.map((user) => (
      <div className='card shadow p-4'>
        <div className='card-body d-flex justify-content-between'>
          <div className='d-flex flex-column'>
            <span>Nome: {user.nome}</span>
            <span>E-mail: {user.email}</span>
            <span>Idade: {user.idade}</span>
          </div>
          
          <button className='btn btn-danger'><Trash size={20}/></button>
        </div>
      </div>
    )) }

    </section>
  )
}

export default Home
