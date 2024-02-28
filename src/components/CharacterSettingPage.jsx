import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { BsChevronLeft } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
// import AWS from "aws-sdk"

import styles from './CharacterSettingPage.module.css';
import { useEffect, useState } from 'react';
import CommonHeader from './Header';

export default function CharacterSettingPage(){
	const navigate = useNavigate();
	const location = useLocation();

	const [name, setName] = useState('');
	const [setting, setSetting] = useState('');
	const [accent, setAccent] = useState('');
	const [personality, setPersonality] = useState('')
	const [open, setOpen] = useState(true);
	const [imgSrc, setimgSrc] = useState('');
	const [uploadFile, setUploadFile] = useState('');
	const [uploadImgName, setUploadImgName] = useState("none");

	const [nameLabel, setNameLabel] = useState("1자 이상 작성해주세요")
	const [settingLabel, setSettingLabel] = useState("10자 이상 작성해주세요")
	const [accentLabel, setAccentLabel] = useState("10자 이상 작성해주세요")
	const [imgLabel,setImgLabel] = useState("사진 선택")

	const [isName,setIsName] = useState(false);
	const [isSetting,setIsSetting] = useState(false);
	const [isAccent,setIsAccent] = useState(false);

	const exName = "화면에 표시될 캐릭터의 이름입니다. (필수)"
	const exSetting = "설정: 캐릭터의 특성, 행적, 배경 등의 설정을 넣어 주세요. 설정이 길고 구체적일수록 더욱 입체적인 캐릭터와 대화가 가능합니다. (예: 똑똑함 / 고등학생 / 19살 / 동생이 있음) (필수)"
	const exAccent = "캐릭터의 평소 말투를 참고할 수 있는 문장을 넣어 주세요. 3개~5개 정도 넣으면 적절한 대화가 가능합니다. (예: 안녕하세요. / 차차입니다. / 잘 부탁드립니다.) "
	const exPersonality = "캐릭터의 성격을 알 수 있는 말을 키워드로 넣어 주세요. 필수 사항은 아니며, 성격을 정확하게 입력할수록 입체적인 캐릭터와 대화가 가능합니다. (필수 아님)"

	// useEffect(() => {
	// 	if(location.state.isCommunity){
	// 		// setName(location.state.name)
	// 		// setSetting(location.state.setting)
	// 		// setAccent(location.state.accent)
	// 		// setPersonality(location.state.personality)
	// 		setOpen(false)
	// 		// setUploadImgName(location.state.img)
	// 		setNameLabel("다른 사용자의 설정입니다")
	// 		setAccentLabel("다른 사용자의 설정입니다")
	// 		setSettingLabel("다른 사용자의 설정입니다")
	// 		setImgLabel("사진 선택됨")
	// 		setIsName(true)
	// 		setIsSetting(true)
	// 		setIsAccent(true)
	// 	}
	// },[])
	

	// const region = "ap-northeast-2";
  // const bucket = "chacha-spark/character";

	// AWS.config.update({
	// 	region: region,
	// 	accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
	// 	secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
	// });

	// const handleFileInput = async (fileBlob) => {
	// 	setImgLabel("사진 선택됨")
	// 	setUploadFile(fileBlob);
		
	// 	const reader = new FileReader();
	// 	reader.readAsDataURL(fileBlob);
	// 	return new Promise((resolve) => {
	// 		reader.onload = () => {
	// 			setimgSrc(reader.result);
	// 			resolve();
	// 		};
	// 	});
	// };

	// const userId = location.state.userId;

	// async function sendSetting() {
	// 	if (location.state.isCommunity) {
	// 		navigate('/setting/situation', {state: {userId: userId, character_id: location.state.characterId, character_name: name, imgName:uploadImgName}})
	// 	}
	// 	else {
	// 		if (uploadFile == '') {
	// 			const uploadImgName = "default.jpeg";
	// 			const res = await axios.post("http://13.209.167.220/characters/create", {
	// 				"user_id": 1,
	// 				"name": name,
	// 				"setting": setting,
	// 				"accent": accent,
	// 				"personality": personality,
	// 				"open": open,
	// 				"img": uploadImgName,
	// 				"user_cnt": 0
	// 			});
	// 			navigate('/setting/situation', {state: {userId: userId, character_id: res.data.character.character_id, character_name: name, imgName:uploadImgName}})
	// 		}
	// 		else {
	// 			const uploadImgName = Date.now() + ".png";
	// 			const upload = new AWS.S3.ManagedUpload({
	// 				params: {
	// 						Bucket: bucket, // 버킷 이름
	// 						Key: uploadImgName, // 유저 아이디
	// 						Body: uploadFile, // 파일 객체
	// 				},
	// 			});
	// 			const promise = upload.promise();
	// 			promise.then(
	// 					function () {
	// 							// 이미지 업로드 성공
	// 					},
	// 					function (err) {
	// 						console.log(err)
	// 							// 이미지 업로드 실패
	// 					}
	// 			);
	// 			const res = await axios.post("http://13.209.167.220/characters/create", {
	// 				"user_id": 1,
	// 				"name": name,
	// 				"setting": setting,
	// 				"accent": accent,
	// 				"personality": personality,
	// 				"open": open,
	// 				"img": uploadImgName,
	// 				"user_cnt": 0
	// 			});
	// 			navigate('/setting/situation', {state: {userId: userId, character_id: res.data.character.character_id, character_name: name, imgName:uploadImgName}})
	// 		}
	// 	}
	// }

	const onChangeNameInput = (e) => {
		setName(e.target.value)
		if(e.target.value.length < 1){
			setNameLabel("1자 이상 작성해주세요")
			setIsName(false)
		}
		else{
			setIsName(true)
			setNameLabel("자세히 쓸수록 성능이 좋아져요!")
		}
	}

	const onChangeSettingInput = (e) => {
		setSetting(e.target.value)
		if(e.target.value.length < 10){
			setSettingLabel("10자 이상 작성해주세요")
			setIsSetting(false)
		}
		else{
			setIsSetting(true)
			setSettingLabel("자세히 쓸수록 성능이 좋아져요!")
		}
	}

	const onChangeAccentInput = (e) => {
		setAccent(e.target.value)
		if(e.target.value.length < 10){
			setAccentLabel("10자 이상 작성해주세요")
			setIsAccent(false)
		}
		else{
			setIsAccent(true)
			setAccentLabel("자세히 쓸수록 성능이 좋아져요!")
		}
	}

	const onChangePersonalityInput = (e) => {
		setPersonality(e.target.value)
	}


	const onClickButton = () => {
		// navigate('/warning', {state: {userId: userId}});
	}
	const handleClickButton = () => {
		// navigate('/community', {state: {userId: userId}})
	}
	const handleClickNextButton = () => {
		if(isName && isSetting && isAccent){
			// sendSetting();
		}
		else{
			
		}
	}

	return(
		<div className={styles.Background}>
			<CommonHeader content="캐릭터 생성"/>
				<div className={styles.ScrollBackGround}>
					<div className={styles.SubWarning}>캐릭터는 사용자의 창작물입니다.</div>
					<div className={styles.Settings}>
						<Form className={styles.NameCategoriBox}>
							<div className={styles.NameCategori}>
								<div className='d-flex flex-row align-items-center'>
									<Form.Label className={styles.Tag}>이름</Form.Label>
									<Form.Label className={isName? styles.LabelOkay : styles.LabelWarning}>{nameLabel}</Form.Label>
								</div>
								<Form.Control className={styles.inputBox} type='text' name='name' placeholder={exName} value={name} onChange={onChangeNameInput}></Form.Control>
							</div>
							<div className={styles.NameCategori}>
								<div className='d-flex flex-row align-items-center'>
									<Form.Label className={styles.Tag}>카테고리</Form.Label>
									<Form.Label className={isName? styles.LabelOkay : styles.LabelWarning}>{nameLabel}</Form.Label>
								</div>
								<Form.Select className={styles.inputBox} placeholder={exName} value={name} onChange={onChangeNameInput}></Form.Select>
							</div>
						</Form>
						<Form className={styles.SettingBox}>
							<div className='d-flex flex-row align-items-center'>
								<Form.Label className={styles.Tag}>소개</Form.Label>
								<Form.Label className={isSetting? styles.LabelOkay : styles.LabelWarning }>{settingLabel}</Form.Label>
							</div>
							<Form.Control className={styles.inputBox} placeholder={exSetting} rows={1} as='textarea' name='setting' value={setting}  onChange={onChangeSettingInput}></Form.Control>
						</Form>
						<Form className={styles.SettingBox}>
							<div className='d-flex flex-row align-items-center'>
								<Form.Label className={styles.Tag}>설정</Form.Label>
								<Form.Label className={isSetting? styles.LabelOkay : styles.LabelWarning }>{settingLabel}</Form.Label>
							</div>
							<Form.Control className={styles.inputBox} placeholder={exSetting} rows={4} as='textarea' name='setting' value={setting}  onChange={onChangeSettingInput}></Form.Control>
						</Form>
						<Form className={styles.SettingBox}>
							<div className='d-flex flex-row align-items-center'>
								<Form.Label className={styles.Tag}>대화 예시</Form.Label>
								<Form.Label className={isAccent? styles.LabelOkay : styles.LabelWarning }>{accentLabel}</Form.Label>
							</div>
							<Form.Control className={styles.inputBox} placeholder={exAccent} rows={4} as='textarea' name='accent' value={accent}onChange={onChangeAccentInput}></Form.Control>
						</Form>
						<Form className={styles.SettingBox}>
							<div className='d-flex flex-row align-items-center'>
								<Form.Label className={styles.Tag}>성격</Form.Label>
								<Form.Label style={{fontSize:"90%", color:"gray"}}>선택 사항입니다</Form.Label>
							</div>
							<Form.Control className={styles.inputBox} placeholder={exPersonality} rows={3} as='textarea' name='personality' value={personality}  onChange={onChangePersonalityInput}></Form.Control>
						</Form>
						<div className={styles.OpenBox}>
							<Form.Label className={styles.Tag}>캐릭터 공개 여부</Form.Label>
							<Form className={styles.radioContainer}>
								<Form.Group className={styles.radioBox} id='radioBox'>
									<Form.Check type='radio' name='open' label='공개' style={{marginRight:'10%'}} onChange={() => setOpen(true)} />
									<Form.Check type='radio'  name='open' label= '비공개' onChange={() => setOpen(false)} />
								</Form.Group>
							</Form>
						</div>
						<div className={styles.OpenBox}>
							<Form.Label className={styles.Tag}>캐릭터 사진</Form.Label>
							<div className={styles.imgBox}>
								<label htmlFor='imgUpload' className={styles.inputFileButton}>{imgLabel}</label>
								<input type='file' id='imgUpload' accept="image/*" style={{display:'none'}}  onChange={(e) => {;
								}} />
								{imgSrc && <img src={imgSrc} className={styles.imgPreview} />}
							</div>
						</div>
						<Button className={styles.SettingButton} onClick={handleClickNextButton}>다음 단계로</Button>
					</div>
				</div>
			</div>
	)
}