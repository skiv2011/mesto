export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userJob = document.querySelector(jobSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      job: this._userJob.textContent,
    };
    return userInfo;
  }

  setUserInfo({name, job, avatar, userId}) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
    this._avatarSelector.setAttribute("src",avatar);
    this._userId = userId;
}
getUserId() {
  return this._userId;
}
}
