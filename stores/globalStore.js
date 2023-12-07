import { defineStore } from "pinia";

export const useGlobalStore = defineStore("GlobalStore", () => {
  const cvModal = ref(false);
  const layout = ref('default')
  const switchCvModal = () => {
    cvModal.value = !cvModal.value;
  };
  return {
    cvModal,
    switchCvModal,
    layout,
  };
});
