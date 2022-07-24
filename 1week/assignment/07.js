/**
 * 구현해주세요!
 */

class AuthClient {
  constructor() {
    //초기값을 설정해줍니다.
    this.id = "";
    this.password = 0;
  }

  isLogin() {
    //만약에 this.id에 아무것도 등록되어 있지 않으면, 로그인되어있지 않다고 표시합니다.
    if (this.id === "") {
      console.log("로그인 되어 있지 않아요.");
    }
  }
  signup(signUpId, signUpPassword) {
    //기존 contructor에 있던 값들과 유저가 등록한 아이디와 비밀번호를 같게 할당해줍니다.
    this.id = signUpId;
    this.password = signUpPassword;
    console.log(`회원가입이 완료되었습니다. ${this.id}`);
  }
  login(loginId, loginPassword) {
    //로그인한 아이디와 비밀번호가 this.id와 this.password에 할당해줍니다.
    this.id = loginId;
    this.password = loginPassword;
    console.log(`로그인 되었습니다. 아이디 : ${this.id}`);
  }
  setPassword(userId, currentPassword, newPassword) {
    //만약 유저가 입력한 아이디와 비밀번호가 기존것과 모두 같다면 패스워드 재설정을 허락해줍니다.
    if (this.id === userId && this.password === currentPassword) {
      this.password = newPassword;
      console.log(`패스워드가 재설정 되었습니다.`);
    } else {
      console.log("자신의 계정만 비밀번호를 변경할 수 있어요.");
    }
  }
  logout() {
    //로그 아웃은 this.id와 this.password를 빈 문자열로 초기화 시켜주는것으로 구현했습니다.
    this.id = "";
    this.password = "";
    console.log(`로그아웃 되었습니다.`);
  }
  withdrawal(userId, userPassword) {
    //만약 this.id값을 비교하여 다른 계정일 때 회원탈퇴할 수 없게 만들어줍니다.
    if (this.id !== userId) {
      console.log(`자신의 계정만 회원탈퇴를 할 수 있어요`);
    } else if (this.password !== userPassword) {
      //만약 비밀번호가 다르면 일치하는 계정이 없다고 말해줍니다.
      console.log(`정보가 일치하는 계정이 없어요.`);
    } else {
      //모든 조건을 통과한 그 외의 경우에 회원탈퇴가 되도록 진행합니다.
      console.log(`회원탈퇴가 완료되었습니다. 아이디 : ${this.id}`);
      this.id = "";
      this.password = "";
    }
  }
  userList() {
    //이 부분은 어떻게 코드로 구현할지 잘 모르겠습니다.
    console.log(`[{userId: ${this.id}, password: ${this.password}}]`);
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
authClient.withdrawal("admin", 5678); // 회원탈퇴가 완료되었습니다. 아이디 : admin
authClient.isLogin(); // 로그인 되어 있지 않아요.
authClient.userList(); // [ { userId: 'admin2', password: 1234 } ]
