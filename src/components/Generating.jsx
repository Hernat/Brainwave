import { loading } from "../assets";

const Generating = ({ className }) => {
	return (
		<div
			className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.75rem] ${
				className || ""
			} text-base`}
		>
			<img src={loading} alt="loading" className="w-5 h-5 mr-4" />
			Ai is Generating
		</div>
	);
};

export default Generating;
