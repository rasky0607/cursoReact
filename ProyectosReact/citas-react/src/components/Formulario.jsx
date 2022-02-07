//El atributo htmlForm , permite que cuando el usuario haga click en el label, active el input, enlazandolo a través de su id
function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'> Añade Pacientes y {' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>       

      <form className='bg-white shadow-md rounded-lg py-5 px-5 mb-10'>
        <div className='mb-5'>
            <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
              Nombre Mascota
            </label>
            <input id='mascota' type='text' placeholder="Nombre de la mascota" className='border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='mb-5'>
            <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
              Nombre Propietario
            </label>
            <input id='propietario' type='text' placeholder="Nombre del Propietario" className='border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='mb-5'>
            <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
              Email Propietario
            </label>
            <input id='email' type='email' placeholder="Email del Propietario" className='border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='mb-5'>
            <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>
              Alta
            </label>
            <input id='alta' type='date' className='border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md'/>
        </div> 
        <div className='mb-5'>
            <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>
              Alta
            </label>
            <textarea id='sintomas' placeholder="Sintomas que presenta" className='border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md' />
        </div> 
        <input type='submit' className='bg-indigo-600 w-full p-3 text-white uppercase fontr-bold hover:bg-indigo-700 cursor-pointer transition-all'/>       
      </form>
    </div>
  )
}

export default Formulario
