import { makeAutoObservable } from "mobx";

class FormStore {
  formData: string[] = Array(7).fill("");

  constructor() {
    makeAutoObservable(this);
  }

  setFormData(i: number, value: string) {
    this.formData[i] = value;
  }

  getFormData() {
    return this.formData;
  }
  clearInputValues() {
    this.formData = Array(7).fill("");
  }
}

const formStore = new FormStore();
export default formStore;
