import { AiOutlineUser, AiOutlineKey } from 'react-icons/ai'
import Image from 'next/image'
import cat from './cat_cozy.png'
const Login = () => {
	return(
		<div className="h-full flex justify-center items-center bg-gray-200 ">
			<div className=" absolute top-0 left-0 ">
				<Image
					width={200}
					height={200}
					src={cat}/>
			</div>
			<form
				action=""
				className="flex flex-col space-y-8 p-12 w-7/12 rounded-xl bg-gray-100 border-4 border-mainColor">
				<div
					className="py-2 px-4 flex items-center space-x-2 border-2 rounded-md overflow-hidden focus-within:border-yellow-600 nm-inset-gray-200">
					<AiOutlineUser />
					<input
						type="text"
						placeholder="Username"
						className="focus:outline-none bg-transparent w-full"/>
				</div>

				<div
					className="py-2 px-4 flex items-center space-x-2 border-2 rounded-md overflow-hidden focus-within:border-yellow-600 nm-inset-gray-200">
					<AiOutlineKey />
					<input
						type="password"
						placeholder="Password"
						className="focus:outline-none bg-transparent w-full"/>
				</div>

				<div className="flex flex-row justify-between ">

					<div className="flex flex-col space-y-2">
						<a href="#" className="underline font-extralight text-xs"> Forgot Passwort </a>
						<a href="#" className="underline font-extralight text-xs"> Register </a>
					</div>
					<input
						type="submit"
						value="Login"
						className="rounded-md w-4/12 py-1 nm-flat-mainColor hover:nm-inset-mainColor cursor-pointer"
						/>

				</div>

			</form>
		</div>
	)
}
export default Login
