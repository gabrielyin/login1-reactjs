export default function Login() {
    return (
        <div className='min-h-screen px-10 flex items-center bg-gray-200'>
            <div className='container max-w-lg mx-auto h-fit px-5 py-8 bg-white rounded-xl shadow-md shadow-gray3-00'>
                <div className='mb-3'>
                    <h3 className='block text-5xl font-bold text-blue-600 mb-1'>Login</h3>
                    <h3>Não tem uma conta? <a href="/register">Clique aqui</a></h3>
                </div>
                <div className='mb-1'>
                    <label className='block mb-1 font-semibold text-sm'>Nome completo</label>
                    <input className='p-2 outline-none focus:ring-2 focus:ring-blue-600 transition-all container rounded bg-gray-100 mb-2' type="text" placeholder='Nome completo' />
                </div>
                <div className='mb-1'>
                    <label className='block mb-1 font-semibold text-sm'>Senha</label>
                    <input className='p-2 outline-none focus:ring-2 focus:ring-blue-600 transition-all container rounded bg-gray-100 mb-2' type="password" placeholder='Senha' />
                </div>
                <button
                    className='container focus:ring focus:ring-blue-300 hover:bg-blue-500 transition-all outline-none mt-6 bg-blue-400 py-2 font-semibold text-white uppercase rounded'
                >Login</button>
            </div>
        </div>
    )
}