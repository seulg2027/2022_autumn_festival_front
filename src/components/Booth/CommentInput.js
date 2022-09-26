import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
// import { MdAdd } from 'react-icons/md';
// import './CommentInput.css';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import axios from '../../api/axios';
import { useParams } from 'react-router-dom';

const CommentInsert = styled.form`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-item: center;
`;

const WrapComment = styled.div`
  position: relative;
  top: 0;
  left: 0;
  & > input {
    position: absolute;
    left: 10px;
    top: 8px;
    padding: 8px;
  }
`;

const style = {
  wrap: {
    padding: '10px',
    height: '20px',
  },

  wrap__content: {
    padding: '10px',
    height: '20px',
    //임의
    paddingBottom: '30px',
  },

  font: {
    fontFamily: 'GmarketSansLight',
    fontSize: '12px',
  },

  box__name: {
    position: 'absolute',
    padding: '5px',
    float: 'left',
  },
  box__pw: {
    padding: '5px',
    float: 'right',
  },

  inputbox: {
    borderRadius: '5px',
    background: 'transparent',
    border: '0.5px solid #dadada',
    width: '85px',
    marginLeft: '5px',
    position: 'relative',
    color: '#FFF',
  },
  contentbox: {
    fontFamily: 'GmarketSansLight',
    fontSize: '12px',

    borderRadius: '20px',
    background: 'transparent',
    border: ' 1px solid #dadada',
    boxShadow: '0 0 2px white',
    width: '90%',
    height: '20px',
    paddingLeft: '10px',
    color: '#FFF',
  },
  button: {
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    fontSize: '20px',
    // 임의
  },
};

const CommentInput = (/*{ onInsert }*/) => {
  const [value, setValue] = useState({
    writer: '',
    password: '',
    content: '',
  });

  const onChangeName = useCallback(
    (e) => {
      setValue({
        writer: e.target.value,
        password: value.password,
        content: value.content,
      });
      console.log(value);
    },
    [value],
  );

  const onChangePassword = useCallback(
    (e) => {
      setValue({
        writer: value.writer,
        password: e.target.value,
        content: value.content,
      });
      console.log(value);
    },
    [value],
  );

  const onChangeContent = useCallback(
    (e) => {
      setValue({
        writer: value.writer,
        password: value.password,
        content: e.target.value,
      });
      console.log(value);
    },
    [value],
  );

  let detailId = useParams().id;
  console.log('detailId:', detailId);

  // 방명록 글쓰기 API요청
  const onSubmit = (e) => {
    // onInsert(value.writer, value.password, value.content);
    if (isValidCheck()) {
      setValue({
        writer: value.writer,
        password: value.password,
        content: value.content,
      });
      console.log(value);

      //e.preventDefault();
      if (isBadWords()) {
        axios
          .post(`/booths/${detailId}/comments`, {
            writer: value.writer,
            password: value.password,
            content: value.content,
          })
          .then(function (response) {})
          .catch(function (error) {});
        window.location.reload();
      }
    }
  };

  const isValidCheck = () => {
    if (value.writer === '' || value.password === '' || value.content === '') {
      alert('방명록 정보를 모두 입력해주세요.');
      return false;
    } else {
      return true;
    }
  };

  const badwordset = (worldList) => {
    const word = '';
    for (let i = 0; i < worldList.length; i++) {
      word = word + worldList[i];
    }
    return word;
  };

  const isBadWords = () => {
    const badwordexam = [
      'D쥐고',
      'D지고',
      'jonna',
      'jot같',
      'mi쳤',
      'tlqkf',
      'wlfkf',
      '같은 새끼',
      '같은새끼',
      '개 새끼',
      '개같',
      '개나대',
      '개넷',
      '개년',
      '개념빠가',
      '개련',
      '개련',
      '개부랄',
      '개새기',
      '개새끼',
      '개섹',
      '풀발',
      '씹선',
      '개소리',
      '개쓰래기',
      '개저씨',
      '거지같',
      '계새끼',
      '골 빈',
      '골1빈',
      '골빈',
      '괘새끼',
      '구1씹',
      '구씹',
      '그1켬',
      '그나물에',
      '그지 같',
      '그지같',
      '그켬',
      '극1혐',
      '극혐',
      '글러 먹',
      '글러먹',
      '기레기',
      '기자레기',
      '김치녀',
      '한녀',
      '된장녀',
      '앙기모띠',
      '소추',
      '퍄퍄',
      '눈나',
      '김여사',
      '보적보',
      '삼일한',
      '보슬아치',
      '보징어',
      '엑윽',
      '헤으응',
      '이기야',
      '노무',
      '부왘',
      '보픈카',
      '보라니',
      '상폐녀',
      '배빵',
      '누보햄',
      '찌질',
      '자박꼼',
      '로린 ',
      '펨베',
      '펨코',
      '허벌',
      '쿰.척',
      '쿰척',
      '까내리',
      '껒여',
      '꺼지세요',
      '꺼져요',
      '로 꺼져',
      '로꺼져',
      '로 꺼.져',
      '꺼.지',
      '꼬라지',
      '꼬라지',
      '꼴갑',
      '꼴값',
      '꼴깝',
      '꼴랑',
      '꼴보기',
      '꼴뵈기',
      '설거지론',
      '퐁퐁남',
      '퐁퐁녀',
      '나빼썅',
      '나쁜 새끼',
      '넌씨눈',
      '년놈',
      '노무노무',
      '노알라',
      '노친네',
      '느그',
      '느금',
      '뇌 텅',
      '뇌1텅',
      '뇌텅',
      '뇌피셜',
      '눈깔 파',
      '눈깔파',
      '눈새',
      '늬믜',
      '늬미',
      '니년',
      '니믜',
      '니미럴',
      '닝기리',
      'ㄷㅇㅂ',
      '다꺼져',
      '닥1',
      '닥2',
      '닥전',
      '닥쳐라',
      '닥치세',
      '닥후',
      '대가리',
      '대갈',
      '더럽네',
      '덜떨어',
      '덬',
      '도라이',
      '도랏',
      '도랐',
      '도른',
      '돌앗구만',
      '돌앗나',
      '돌앗네',
      '돌았구만',
      '돌았나',
      '돌았네',
      '둄마',
      '뒈져',
      '뒤져라',
      '뒤져버',
      '뒤져야',
      '뒤져야지',
      '뒤져요',
      '뒤졌',
      '뒤지겠',
      '뒤지고싶',
      '뒤지길',
      '뒤진다',
      '뒤질',
      '듣보',
      '디져라',
      '디졌',
      '디지고',
      '디질',
      '딴년',
      '또라이',
      '또라인',
      '똘아이',
      '뚝배기',
      '뚫린 입',
      '뚫린입',
      '런년',
      '레1친',
      '레기같',
      '레기네',
      '레기다',
      '레친',
      '롬들',
      'ㅁㅊ',
      'ㅁ친',
      '망돌',
      '망해라',
      '머갈',
      '머리 텅',
      '머리텅',
      '먹.금',
      '먹.끔',
      '먹1금',
      '먹금',
      '먹끔',
      '명존',
      '믜칀',
      '믜친',
      '미: 놈',
      '미:놈',
      '미1친',
      '미놈',
      '미시친발',
      '미쳣네',
      '미쳤나',
      '미쳤니',
      '미췬',
      '미칀',
      '미친 새',
      '미친~',
      '미친개',
      '미친새',
      '미친색',
      '미친ㅋ',
      '미틴',
      '및힌',
      '줘패',
      '꼬추',
      '미치ㄴ',
      'ㅅ.ㄲ',
      '색퀴',
      'ㅅ끼',
      '흉자',
      '미친넘',
      '미핀놈',
      '샛기',
      'G랄',
      '세키',
      '미치누',
      'd져',
      'ㅂㄹ',
      'ㅂㅁㄱ',
      'ㅂㅊ',
      'ㅂ크',
      '발놈',
      '별창',
      '병1신',
      '병1크',
      '병맛',
      '병신',
      '병크',
      '봊',
      '보전깨',
      '싸개',
      '븅신',
      '빠큐',
      '빡새끼',
      '빻았',
      '빻은',
      '뻐규',
      '뻐큐',
      '뻑유',
      '뻑큐',
      '뻨큐',
      '뼈큐',
      '뽄새',
      '뽄세',
      '삐걱',
      '쉰내',
      'ㅄ',
      'ㅅ.ㅂ',
      'ㅅ1ㅂ',
      'ㅅ1발',
      'ㅅㄲ네',
      'ㅅㄲ들',
      '친ㅅㄲ',
      '친 ㅅㄲ',
      'ㅅ1ㄲ',
      'ㅅ루',
      'ㅅㅋ',
      'ㅅㅌㅊ',
      'ㅅㅡ루',
      '사새끼',
      '새.끼',
      '새1끼',
      '새1키',
      '새77ㅣ',
      '새끼라',
      '새끼야',
      '새퀴',
      '새킈',
      '새키',
      '색희',
      '색히',
      '샊기',
      '샊히',
      '샹년',
      '섀키',
      '성괴',
      '쉬발',
      '쉬버',
      '쉬이바',
      '쉬이이',
      '쉬이이이',
      '쉬펄',
      '슈1발',
      '슈레기',
      '슈발',
      '슈벌',
      '슈우벌',
      '슈ㅣ발',
      '스.루',
      '스ㄹㅜ',
      '스벌',
      '싑창',
      '시1발',
      '시미발친',
      '시미친발',
      '시바 ',
      '시바라지',
      '시바류',
      '시바시바',
      '시바알',
      '시바앙',
      '시발',
      '🖕',
      '시방새',
      '시벌탱',
      '시볼탱',
      '시부럴',
      '시부렬',
      '시부울',
      '시뷰럴',
      '시뷰렬',
      '시빨',
      '시새발끼',
      '시이발',
      '시친발미',
      '시팔',
      '시펄',
      '십창',
      '십팔',
      'ㅆ1ㄺ',
      'ㅆ1ㅂ',
      'ㅆㄹㄱ',
      'ㅆㄺ',
      'ㅆㅂ',
      '싸가지 없',
      '싸가지없',
      '싸물어',
      '쌍년',
      '쌍놈',
      '쌔끼',
      '썅',
      '썌끼',
      '쒸펄',
      '쓰1레기',
      '쓰래기같',
      '쓰레기 새',
      '쓰레기새',
      '쓰렉',
      '씝창',
      '씨1발',
      '씨바라',
      '씨바알',
      '씨발',
      '씨방새',
      '씨버럼',
      '씨벌',
      '씨벌탱',
      '씨볼탱',
      '씨부럴',
      '씨부렬',
      '씨뷰럴',
      '씨뷰렬',
      '씨빠빠',
      '씨빨',
      '씨뻘',
      '씨새발끼',
      '씨이발',
      '씨팔',
      '씹귀',
      '씹덕',
      '씹못',
      '씹뻐럴',
      '씹새끼',
      '씹쌔',
      '씹창',
      '씹치',
      '씹팔',
      '씹할',
      'ㅇㅍㅊㅌ',
      '아가리',
      '아닥',
      '아오 ㅅㅂ',
      '아오 시바',
      '아오ㅅㅂ',
      '아오시바',
      '애미',
      '앰',
      '앰창',
      '에라이 퉤',
      '에라이 퉷',
      '에라이퉤',
      '에라이퉷',
      '엠뷩신',
      '엠븽신',
      '엠빙신',
      '시녀',
      '엠생',
      '엠창',
      '엿같',
      '엿이나',
      '옘병',
      '오크',
      '와꾸',
      '외1퀴',
      '외퀴',
      '웅앵',
      '웅엥',
      '은년',
      '은새끼',
      '이 새끼',
      '이따위',
      '이새끼',
      '인간말종',
      '입 털',
      '입털',
      'ㅈ.ㄴ',
      'ㅈㄴ',
      'ㅈㄹ',
      '절라',
      '정병',
      '정신나갓',
      '정신나갔',
      '젖 같',
      '젗같',
      '젼나',
      '젼낰',
      '졀라',
      '졀리',
      '졌같은',
      '졏 같',
      '조낸',
      '조녜',
      '조온',
      '조온나',
      '족까',
      '존 나',
      '존 나',
      '존.나',
      '존1',
      '존1나',
      '🚬',
      '존귀',
      '존귘',
      '존ㄴ나',
      '존나',
      '존낙',
      '존내',
      '존똑',
      '존맛',
      '존멋',
      '존버',
      '존싫',
      '존웃',
      '존잘',
      '존잼',
      '존좋',
      '졸라',
      '졸맛',
      '졸멋',
      '졸싫',
      '졸예',
      '졸웃',
      '졸잼',
      '졸좋',
      '좁밥',
      '조센징',
      '짱깨',
      '짱개',
      '짱꼴라',
      '짱골라',
      '좃',
      '종나',
      '곱창났',
      '곱창나',
      '좆',
      '좆까',
      '좇같',
      '죠낸',
      '죠온나',
      '죤나',
      '죤내',
      '죵나',
      '죶',
      '죽어버려',
      '죽여 버리고',
      '죽여버리고',
      '죽여불고',
      '죽여뿌고',
      '줬같은',
      '쥐랄',
      '쥰나',
      '쥰내',
      '쥰니',
      '쥰트',
      '즤랄',
      '지 랄',
      '지1랄',
      '지1뢰',
      '지랄',
      '지롤',
      'ㅉ',
      'ㅉ질한',
      '짱깨',
      '짱께',
      '쪼녜',
      '쪼다',
      '착짱죽짱',
      '섬숭이',
      '쪽본',
      '쪽1바리',
      '쪽바리',
      '쪽발',
      '쫀 맛',
      '쫀1',
      '쫀귀',
      '쫀맛',
      '쫂',
      '쫓같',
      '쬰잘',
      '쬲',
      '쯰질',
      '찌1질',
      '찌질한',
      '찍찍이',
      '찎찎이',
      '찝째끼',
      '창년',
      '창녀',
      '창남',
      '창놈',
      '창넘',
      '처먹',
      '凸',
      '첫빠',
      '취좃',
      '친 년',
      '한 년',
      '친 놈',
      '친구년',
      '친년',
      '한년',
      '친노마',
      '친놈',
      '텐덕',
      '핑끄',
      '핑프',
      'ㅎㅃ',
      'ㅎㅌㅊ',
      '손놈',
      '남미새',
      '여미새',
      '호로새끼',
      '호로잡',
      '화낭년',
      '화냥년',
      '후.려',
      '후1려',
      '후1빨',
      '후려',
      '후빨',
      '미-친',
      '시-발',
      '지-랄',
      '개-새-끼',
      '또-라-이',
      '디-질',
      '걸-레',
      '닥-쳐',
      '등-신',
      '뇌-텅텅',
      '대-가-리',
      '병-신',
      '엠-창',
      '조-ㅈ',
      '염-병',
      '쌍-판',
      '쳐-',
      '씹-',
    ];
    const string = value.content;
    if (string.includes('개새끼', '시발')) {
      // console.log(value.content.includes(badwordset(badwordexam)));
      alert('경고');
      return false;
    } else {
      return true;
    }
  };

  return (
    <CommentInsert className="CommentInsert" method="post">
      <div style={style.wrap}>
        <div style={style.box__name}>
          <div style={style.font}>
            작성자명
            <input
              name="writer"
              style={style.inputbox}
              value={value.writer}
              onChange={onChangeName}
            />
          </div>
        </div>
        <div style={style.box__pw}>
          <div style={style.font}>
            비밀번호
            <input
              name="password"
              style={style.inputbox}
              value={value.password}
              onChange={onChangePassword}
            />
          </div>
        </div>
      </div>
      <WrapComment>
        <input
          name="content"
          style={style.contentbox}
          placeholder="후기를 남겨보세요."
          value={value.content}
          onChange={onChangeContent}
        />
        <ArrowCircleDownIcon
          onClick={onSubmit}
          style={{
            position: 'absolute',
            right: '12px',
            top: '12px',
            fontSize: '28px',
          }}
        ></ArrowCircleDownIcon>
      </WrapComment>
    </CommentInsert>
  );
};

export default CommentInput;
