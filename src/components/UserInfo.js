export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userJob = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      job: this._userJob.textContent,
    };
    return userInfo;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
>>>>>>> b436ba3d9e1873b14fe49d2b1c2c0c7c5e418410
  }

  setUserInfo({ name, job }) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}

