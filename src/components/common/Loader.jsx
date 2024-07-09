import { TailSpin } from "react-loader-spinner"

const Loader = () => {
	return (
		<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-screen h-screen bg-[rgba(0,0,0,0.2)] z-[100]">
			<div className="z-[100]">
				<TailSpin
					visible={true}
                      height="80"
                      width="80"
                      color="#4fa94d"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
				/>
			</div>
		</div>
	)
}

export default Loader
