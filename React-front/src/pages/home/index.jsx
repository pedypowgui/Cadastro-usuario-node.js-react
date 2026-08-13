import './style.css'

function Home() {
  return (
    <section className='mt-5 d-flex justify-content-center'>
      <div className='card text-center shadow p-5'>  
        <h1 className='fs-2 fw-bold pb-4'>Cadastro de usuários</h1>

        <form className='d-flex flex-column gap-3 mb-3' action='post'>
          <input type='text' className='input rounded-pill p-2' placeholder='Nome'/>
          <input type='text' className='input rounded-pill p-2' placeholder='E-mail'/>
          <input type='text' className='input rounded-pill p-2' placeholder='Idade'/>
        </form>

        <button className='rounded-pill btn btn-primary p-3 mt-4'>Cadastrar</button>
      </div>
    </section>
  )
}

export default Home
