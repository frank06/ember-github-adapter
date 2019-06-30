import ApplicationAdapter from './application';

export default class RepositoryAdapter extends ApplicationAdapter {

  headers = {
    Authorization: "token v3ryl0ngt0k3nfr4mg1thub" // replace!
  }

  updateRecord(store, type, snapshot) {
    const url = `${this.host}/user/starred/${snapshot.attr('fullName')}`;
    return this.ajax(url, "PUT", {});
  }

}