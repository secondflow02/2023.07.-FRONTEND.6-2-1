import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
export default RootLayout;

//중첩된(메인-로그인,ㅁ-인=로그아숫) 라우트 부모 라우터에서 자식 라우터로 라우팅 정보를 전달해주는 역활
//중첩된 라우터에서 사용된다,부모 라우터에서 아웃렛을 사용하여 자식라우터의 출력을 렌더링함 아울렛이 메인이나 앳에 연결된다
//부모가 메인 다른곳이 자식, 중첩이 안되어있으면 패스를 사용,<Outlet/>자식들을 담고있다(자식이 있는 중쳡된애들 중첩이 작이이있다는것)
//네이버-카페,네이버-스포츠->라우터로 분류
