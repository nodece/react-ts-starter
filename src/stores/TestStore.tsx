import {action, observable} from 'mobx'

export default class TestStore {
  @observable public id: number = 1

  @action
  public async updateId() {
    this.id++
  }
}
