import { BsChevronLeft } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";

import './Header.css'

export default function CommonHeader(props){
	const onClickButton = () => {
		// navigate('/setting/character', {state: {userId: userId}});
	}

	return(
		<div className="HeaderContainer">
			<BsChevronLeft size={28} onClick={onClickButton}/>
			<h2 className="text">{props.content}</h2>
			{props.isCharacter ? <CiSquarePlus size={36}/> : <div/>}
		</div>
	)
	
}