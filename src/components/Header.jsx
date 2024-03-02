import { useNavigate } from "react-router-dom";

import { BsChevronLeft } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";

import './Header.css'

export default function CommonHeader(props){
	const navigate = useNavigate();

	const onClickBack = () => {
		navigate(-1);
	}

	const onClickCreate = (userId) => {
		navigate('/character/setting', {state:{userId:userId}})
	}

	return(
		<div className="HeaderContainer">
			{props.isCharacter? <div/> : <BsChevronLeft size={28} onClick={onClickBack}/>}
			<h2 className="text">{props.content}</h2>
			{props.isCharacter ? <CiSquarePlus size={36} onClick={() => onClickCreate(props.userId)}/> : <div/>}
		</div>
	)
	
}