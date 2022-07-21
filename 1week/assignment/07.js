class AuthClient {
  id = null; //아이디 필드, null로 초기화
  pw = null; //패스워드 필드,null로 초기화
  loggedIn = false; //로그인필드, 로그아웃상태로 초기화
  users = [];
  signup(id, pw) {
    this.users.push({ userId: id, password: pw });
    console.log(`회원가입이 완료되었습니다. 아이디:${id}`);
  }
  isLogin() {
    this.loggedIn
      ? console.log("로그인 되어 있습니다.")
      : console.log("로그인 되어 있지 않아요.");
  }
  login(id, pw) {
    this.id = id;
    this.pw = pw;
    this.loggedIn = true;
    console.log(`로그인 되었습니다. 아이디:${this.id}`);
  }
  logout() {
    this.id = null;
    this.pw = null;
    this.loggedIn = false;
    console.log("로그아웃 되었습니다.");
  }
  setPassword(id, pw, pw2) {
    if (this.id === id && this.pw === pw) {
      this.pw = pw2;
      console.log("패스워드가 재설정 되었습니다.");
    } else {
      console.log("자신의 계정만 비밀번호를 변경할 수 있어요.");
    }
  }
  withdrawal(id, pw) {
    if (this.id === id && this.pw === pw) {
      this.id = null;
      this.pw = null;
      this.loggedIn = false;
      this.users.console.log(`회원탈퇴가 완료되었습니다. 아이디:${id}`);
    } else if (this.id !== id) {
      console.log("자신의 계정만 비밀번호를 변경할 수 있어요.");
    } else {
      console.log("정보가 일치하는 계정이 없어요.");
    }
  }
  userList() {
    console.log(this.users);
  }
}
const authClient = new AuthClient();
authClient.isLogin(); // 로그인 되어 있지 않아요.
authClient.signup("admin2", 1234); // 회원가입이 완료되었습니다. 아이디 : admin2
authClient.login("admin2", 1234); // 로그인 되었습니다. 아이디 : admin2
authClient.setPassword("admin2", 1234, 123456); // 패스워드가 재설정 되었습니다.
authClient.logout(); // 로그아웃 되었습니다.
authClient.login("admin", "admin1234"); // 로그인 되었습니다. 아이디 : admin
authClient.setPassword("admin2", 1234, 5678); // 자신의 계정만 비밀번호를 변경할 수 있어요.
authClient.setPassword("admin", "admin1234", 5678); // 패스워드가 재설정 되었습니다.
authClient.withdrawal("admin2", 1234); // 자신의 계정만 회원탈퇴를 할 수 있어요.
authClient.withdrawal("admin", 1234); // 정보가 일치하는 계정이 없어요.
authClient.withdrawal("admin", "admin1234"); // 회원탈퇴가 완료되었습니다. 아이디 : admin
authClient.isLogin(); // 로그인 되어 있지 않아요.
authClient.userList(); // [ { userId: 'admin2', password: 1234 } ]
