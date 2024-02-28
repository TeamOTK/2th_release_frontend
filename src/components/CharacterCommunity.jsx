import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState  } from 'react';
import axios from 'axios';

import CommonHeader from './Header';
import Button from 'react-bootstrap/esm/Button';
import styles from './CharacterCommunity.module.css'
import { BsSearch } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";

export default function CharacterCommunity(){
	const navigate = useNavigate();

	const [characterList, setCharacterList] = useState('');
	const [searchInput, setSearchInput] = useState('');
	const [filteredData,setFilteredData] = useState()

	const getCharacters = async () => {
		const res = await axios.get("http://13.209.167.220/characters/list");
		// 답장
		setCharacterList(res.data.character);
		setFilteredData(res.data.character)
	}

	const searchItems = (searchValue) => {
		setSearchInput(searchValue)
		setFilteredData(characterList.filter((item) => {
			return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
		}))
	}
	useEffect(() =>{
		getCharacters();
	},[])


	const [currentTab, setCurrentTab] = useState(0);

	const tabClickHandler=(index)=>{
		setCurrentTab(index);
	};

	const tabContArr = [
		{
			tabTitle:(
				<li className={currentTab==0 ? styles.isActiveTab : styles.notActiveTab} onClick={() => tabClickHandler(0)}>웹툰/웹소</li>
			),
			tabCont:(
				<div className={styles.tabCont}>
					{filteredData && filteredData.map((character) => {
						return(
							<div className={styles.CharacterSetItem} key={character.character_id}>
								<img src={`https://chacha-spark.s3.ap-northeast-2.amazonaws.com/character/${character.img}`} className={styles.CommunityItemImg} />
								<div className={styles.CommunityItemInfo}>
									<div className={styles.InfoBox}>
										<div style={{width:"80%"}}>
											<div style={{fontWeight:"bold", fontSize:"140%"}}>{character.name}</div>
											<div className={styles.ItemDesc}>한 줄 설명</div>
										</div>
										<div className={styles.userCountBox}>
											<BiCommentDetail size={24} style={{paddingTop:"4%"}}/>
											<div style={{fontSize:'100%', marginLeft:"2%"}}>{character.user_cnt}</div>
										</div>
									</div>
									<div className={styles.ButtonBox}>
										<div className={styles.CommunityItemBtn} onClick={() => onClickItem(character)}>설정 보기</div>
										<div className={styles.CommunityItemBtn} onClick={() => onClickItem(character)}>대화하기</div>
									</div>
									
								</div>
							</div>
						)
					})}
				</div>
			)
		},
		{
			tabTitle:(
				<li className={currentTab==1 ? styles.isActiveTab : styles.notActiveTab} onClick={() => tabClickHandler(1)}>만화/애니</li>
			),
			tabCont:(
				<div>탭 2 내용</div>
			)
		},
		{
			tabTitle:(
				<li className={currentTab==2 ? styles.isActiveTab : styles.notActiveTab} onClick={() => tabClickHandler(2)}>게임</li>
			),
			tabCont:(
				<div>탭 3 내용</div>
			)
		},
		{
			tabTitle:(
				<li className={currentTab==3 ? styles.isActiveTab : styles.notActiveTab} onClick={() => tabClickHandler(3)}>실존인물</li>
			),
			tabCont:(
				<div>탭 4 내용</div>
			)
		},
		{
			tabTitle:(
				<li className={currentTab==4 ? styles.isActiveTab : styles.notActiveTab} onClick={() => tabClickHandler(4)}>게임</li>
			),
			tabCont:(
				<div>탭 5 내용</div>
			)
		}
	]

	


	const onClickItem = (character) => {
		// navigate('/setting/character', {state: {userId: userId, isCommunity:true, name:character.name, setting: character.setting, img:character.img, personality: character.personality, accent: character.accent, characterId: character.character_id}})
	}

	return(
		<div className={styles.Background}>
			<CommonHeader content="캐릭터 목록" />
			{/* <div className='SearchContainer'>
				<BsSearch size={24}></BsSearch> 
				<input className='CommunitySearch' onChange={(e) => searchItems(e.target.value)}></input>
			</div> */}
			<div className={styles.CharacterSetList}>
				<ul className={styles.tabs}>
					{tabContArr.map((section,index)=>{
						return section.tabTitle
					})}
				</ul>
				{tabContArr[currentTab].tabCont}
				
			</div>
		</div>
	)
}