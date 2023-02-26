import { ReactElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CopyURL from '../snsIcon/CopyUrl';
import FaceBook from '../snsIcon/FaceBook';
import Kakao from '../snsIcon/Kakao';
// import KakaoStory from '../snsIcon/KakaoStory';
import NaverBlog from '../snsIcon/NaverBlog';
import Twitter from '../snsIcon/Twitter';

const Button = styled.button`
  border: 0;
  outline: 0;
  width: 50px;
  height: 50px;
  padding-top: 5px;
  cursor: pointer;
  background: ${props => props.color};
  transition: background 0.5s;
  :hover {
    background: rgba(220, 220, 220, 0.477);
  }
`;

const LeftButton = styled(Button)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const RightButton = styled(Button)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const HiddenTextArea = styled.textarea`
  opacity: 0;
  position: absolute;
  left: -999px;
  top: -999px;
`;
const ToastMsg = styled.p`
  margin-top: 5px;
  color: gray;
  transition: all ease-out 0.3s;
  opacity: 0;
  position: relative;
  font-size: 0.9em;
`;

const ShareGroup = styled.div`
  position: relative;
  margin-top: 15px;
  width: 100%;
  text-align: center;
`;
interface props {
  query: string;
  title: string;
  description: string;
  img: string;
}
declare global {
  interface Window {
    Kakao: any;
  }
}
const KakaoShare = ({
  query,
  title,
  description,
  img,
}: props): ReactElement => {
  const [mainUrl] = useState(process.env.URL);
  const size = useRef('');
  const fullUrl = `${mainUrl}/${query}`;
  const shareUrl = `${fullUrl}?isShared=true`;
  // const app_id = '2473764549612950';

  const facebook = () => {
    window.open(
      'http://www.facebook.com/sharer/sharer.php?u=' + shareUrl,
      'name',
      size.current,
    );
  };
  const twitter = () => {
    //이상하게 트위터에서는 리다이렉트용 페이지의 썸네일이 나오지않는다. 그래서 리다이렉트페이지를 포기하고 실제 결과페이지로 바꿈.
    window.open(
      `http://twitter.com/intent/tweet?text=[슬램덩크 MBTI 테스트] %0a ${description} %0a ${fullUrl} %0a %23슬램덩크 %23MBTI %23슬램덩크등장인물테스트 %23심테`,
      'name',
      size.current,
    );
  };
  const naver = () => {
    window.open(
      'http://share.naver.com/web/shareView.nhn?url=' +
        shareUrl +
        '&title=슬랭덩크테스트',
      'name',
      size.current,
    );
  };

  // const urlCopy = () => {
  //   const toast = document.getElementById('toast');
  //   toast!.style.opacity = '1';
  //   const copyText = document.getElementById('copy') as HTMLTextAreaElement;
  //   copyText!.select();
  //   document.execCommand('Copy');
  //   copyText!.blur();

  //   setTimeout(() => {
  //     toast!.style.opacity = '0';
  //   }, 1500);
  // };
  const urlCopy = () => {
    navigator.share({
      title: title,
      text: description,
      url: shareUrl,
    });
  };

  useEffect(() => {
    const popupWidth = 500;
    const popupHeight = 500;

    const popupX = window.screen.width / 2 - popupWidth / 2;

    const popupY = window.screen.height / 2 - popupHeight / 2;
    size.current =
      'status=no, height=' +
      popupHeight +
      ', width=' +
      popupWidth +
      ', left=' +
      popupX +
      ', top=' +
      popupY;

    // console.log(window.Kakao);
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (!window.Kakao.isInitialized())
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      //공유할 때 썸네일에 결과만 공유하고 접속은 테스트하는 페이지로 넘기기 위해서(동적으로 썸네일이 안바뀌기 때문에), shareUrl에 리다이렉트 함수를 넣어둔 페이지의 url을 넣어준다.
      // 카카오톡 공유
      window.Kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: title,
          description: description,
          imageUrl: `${process.env.PATH}/images/${img}`,
          imageWidth: 800,
          imageHeight: 400,
          link: {
            mobileWebUrl: mainUrl,
            webUrl: mainUrl,
          },
        },
        buttons: [
          {
            title: '테스트 하러가기',
            link: {
              mobileWebUrl: mainUrl,
              webUrl: mainUrl,
            },
          },
        ],
      });
    };
  }, []);
  return (
    <>
      <ShareGroup id="shareButton">
        <LeftButton onClick={facebook} color="rgb(224,230,251)">
          <FaceBook></FaceBook>
        </LeftButton>
        <Button id="kakao-link-btn" color="rgba(239, 219, 72, 0.48)">
          <Kakao></Kakao>
        </Button>
        <Button onClick={naver} color="rgba(87, 192, 79, 0.19)">
          <NaverBlog></NaverBlog>
        </Button>
        <Button onClick={twitter} color="rgb(224,230,251)">
          <Twitter />
        </Button>
        <RightButton onClick={urlCopy} color="rgba(153, 153, 153, 0.19)">
          <CopyURL></CopyURL>
        </RightButton>
        <ToastMsg id="toast">클립보드에 주소가 복사되었습니다.</ToastMsg>
        <HiddenTextArea
          readOnly
          id="copy"
          value="https://mycolor.kr"
        ></HiddenTextArea>
      </ShareGroup>
    </>
  );
};

export default KakaoShare;
