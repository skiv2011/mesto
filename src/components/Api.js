class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _check(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Возникла ошибка: ${res.status}`);
  }

  getDataFromServer() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => {
        return this._check(res);
      });
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
      .then(res => {
        return this._check(res);
      });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(res => {
      return this._check(res);
    });
  }

  addCards({ title, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        name: title,
        link: link,
      })
    })
      .then(res => this._check(res))
  }

  deleteCard(cardId){
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => {
      return this._check(res);
    });
  }

  editAvatar(avatar){
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
    .then(res => {
      return this._check(res);
    });
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(res => {
      return this._check(res);
    });
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => {
      return this._check(res);
    });
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: 'd2d0f131-e0ef-4ded-a353-fd5842dcb33b',
    'Content-Type': 'application/json'
  }
});


