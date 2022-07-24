/**
 * 구현해주세요!
 */
class AuthClient {
	constructor() {
		this._user = { id: '', pw: '' };
		this._userList = [{ id: 'admin', pw: 'admin1234' }];
	}
	get user() {
		return this._user;
	}
	set user(user) {
		this._user = user;
	}
	get userData() {
		return this._userList;
	}
	set userData(list) {
		this._userList = list;
	}

	searchUser(id) {
		const searchedData = this._userList.filter((user) => user.id === id);
		if (searchedData.length) return searchedData[0];
		else return '';
	}
	registerUser({ id, pw }) {
		this._userList = [...this._userList, { id, pw }];
	}
	updateUser({ id, pw }) {
		const updatedData = this._userList.map((user) => {
			if (user.id === id) user.pw = pw;
			return;
		});
	}
	removeUser(id) {
		const removedData = this._userList.filter((user) => user.id !== id);
		this._userList = removedData;
	}

	isLogin() {
		const user = this._user;
		if (!user.id) {
			console.log('로그인 되어 있지 않아요.');
			return false;
		} else {
			console.log(`이미 로그인한 상태입니다. 아이디 : ${user.id}`);
			return true;
		}
	}

	signup(id, pw) {
		const isSignedUp = this.searchUser(id);
		if (isSignedUp) console.log(`이미 등록된 아이디입니다.`);
		else {
			this.registerUser({ id, pw });
			console.log(`회원가입이 완료되었습니다. 아이디 : ${id}`);
		}
	}
	login(id, pw) {
		const searchedUser = this.searchUser(id);
		if (!searchedUser) {
			console.log(`입력하신 정보와 일치하는 계정이 없습니다.`);
			return;
		} else {
			if (pw === searchedUser.pw) {
				this._user = { id, pw };
				console.log(`로그인 되었습니다. 아이디 : ${id}`);
			} else {
				console.log(`입력하신 아이디 혹은 패스워드가 일치하지 않습니다.`);
			}
		}
	}
	logout() {
		this._user = { id: '', pw: '' };
		console.log('로그아웃 되었습니다.');
	}
	setPassword(id, originPw, newPw) {
		if (this._user.id !== id) {
			console.log('자신의 계정만 비밀번호를 변경할 수 있어요.');
			return;
		}

		this._user = { id, pw: newPw };
		this.updateUser(this._user);
		console.log('패스워드가 재설정 되었습니다.');
	}

	withdrawal(id, pw) {
		if (this._user.id !== id) {
			console.log('자신의 계정만 회원탈퇴를 할 수 있어요.');
			return;
		}
		if (this._user.pw !== pw) {
			console.log('정보가 일치하는 계정이 없어요.');
			return;
		}

		this._user = { id: '', pw: '' };
		console.log(`회원탈퇴가 완료되었습니다. 아이디 : ${id}`);
	}

	userList() {
		console.log(this._userList);
	}
}

const authClient = new AuthClient();
authClient.isLogin(); // 로그인 되어 있지 않아요.
authClient.signup('admin2', 1234); // 회원가입이 완료되었습니다. 아이디 : admin2
authClient.login('admin2', 1234); // 로그인 되었습니다. 아이디 : admin2
authClient.setPassword('admin2', 1234, 123456); // 패스워드가 재설정 되었습니다.
authClient.logout(); // 로그아웃 되었습니다.
authClient.login('admin', 'admin1234'); // 로그인 되었습니다. 아이디 : admin
authClient.setPassword('admin2', 1234, 5678); // 자신의 계정만 비밀번호를 변경할 수 있어요.
authClient.setPassword('admin', 'admin1234', 5678); // 패스워드가 재설정 되었습니다.
authClient.withdrawal('admin2', 1234); // 자신의 계정만 회원탈퇴를 할 수 있어요.
authClient.withdrawal('admin', 1234); // 정보가 일치하는 계정이 없어요.
authClient.withdrawal('admin', 'admin1234'); // 회원탈퇴가 완료되었습니다. 아이디 : admin
authClient.isLogin(); // 로그인 되어 있지 않아요.
authClient.userList(); // [ { userId: 'admin2', password: 1234 } ]
