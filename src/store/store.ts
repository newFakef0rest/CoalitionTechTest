import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { TPatients } from "../type";
import { makeAutoObservable } from "mobx";
import { getInfo } from "../api/api";

class Store {
  items?: IPromiseBasedObservable<TPatients[]>;

  constructor() {
    makeAutoObservable(this);
  }

  history(id: number) {
    if (this.items?.state === "fulfilled" && this.items?.value) {
      return this.items?.value[id]["diagnosis_history"];
    }
  }

  results(id: number) {
    if (this.items?.state === "fulfilled" && this.items?.value) {
      return this.items?.value[id].lab_results;
    }
  }

  person(id: number) {
    if (this.items?.state === "fulfilled" && this.items?.value) {
      return this.items?.value[id];
    }
  }

  list(id: number) {
    if (this.items?.state === "fulfilled" && this.items?.value) {
      return this.items?.value[id]["diagnostic_list"];
    }
  }

  getItems() {
    this.items = fromPromise(getInfo());
  }
}

export default new Store();
