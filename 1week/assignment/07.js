/**
 * 구현해주세요!
 */
const authClient = new AuthClient();
authClient.isLogin();                               // 로그인 되어 있지 않아요.
authClient.signup('admin2', 1234);                  // 회원가입이 완료되었습니다. 아이디 : admin2
authClient.login('admin2', 1234);                   // 로그인 되었습니다. 아이디 : admin2
authClient.setPassword('admin2', 1234, 123456);     // 패스워드가 재설정 되었습니다.
authClient.logout();                                // 로그아웃 되었습니다.
authClient.login('admin', 'admin1234');             // 로그인 되었습니다. 아이디 : admin
authClient.setPassword('admin2', 1234, 5678);       // 자신의 계정만 비밀번호를 변경할 수 있어요.
authClient.setPassword('admin', 'admin1234', 5678); // 패스워드가 재설정 되었습니다.
authClient.withdrawal('admin2', 1234);              // 자신의 계정만 회원탈퇴를 할 수 있어요.
authClient.withdrawal('admin', 1234);               // 정보가 일치하는 계정이 없어요.
authClient.withdrawal('admin', 'admin1234');        // 회원탈퇴가 완료되었습니다. 아이디 : admin
authClient.isLogin();                               // 로그인 되어 있지 않아요.
authClient.userList();                              // [ { userId: 'admin2', password: 1234 } ]