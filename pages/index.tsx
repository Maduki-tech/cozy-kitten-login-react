import type { NextPage } from 'next'
import Login from './Login'

const Home: NextPage = () => {
	return (
		<div className="grid grid-cols-12 h-screen">
			<div className="col-span-4 ">
				<Login />
			</div>
			<div className="col-span-8 bg-catImage3 bg-auto bg-no-repeat overflow-hidden">
				<h1 className="text-9xl text-gray-200 relative left-24 top-24 underline ">Cozy Kitten</h1>
				<h2 className="text-3xl text-gray-200 relative font-light left-24 top-24 ">Cozy Kitten</h2>
			</div>
		</div>
	)
}

export default Home
