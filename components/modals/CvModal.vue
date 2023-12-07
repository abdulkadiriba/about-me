<script setup lang="ts">
import vueRecaptcha from "vue3-recaptcha2";
import { useGlobalStore } from "~/stores/globalStore";
import { useToast } from "vue-toastification";
const toast = useToast();
const modals = useGlobalStore();

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const verificationClass: any = ref();
const verificationAnswer: any = ref("Download");
const verificationCode: any = ref();
const button = ref(false);
const showRecaptcha = ref(true);
const loadingTimeout = 5000; // 30 seconds

const recaptchaVerified = () => {
  showRecaptcha.value = false;
  button.value = true;

  $fetch(
    "https://discord.com/api/webhooks/1171087359975096473/-7_yM5526PopCdWD6uk-Wv7StP39NaoYDyzKLDnr_xkJq6kaSHT99ijmf69fPLhZ5gy6",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: "Someone viewed your CV file" }),
    }
  );
  setTimeout(() => {
    window.location.href = "/abdulkadiribaCV.pdf";
  }, 1000);
};
const recaptchaExpired = () => {
  toast.error("Captcha expired");
};
const recaptchaFailed = () => {
  toast.error("Captcha Failed");
};
const recaptchaError = () => {
  toast.error("Captcha Error");
};
</script>

<template>
  <!-- CV MODAL -->
  <TransitionRoot appear :show="modals.cvModal" as="template">
    <Dialog as="div" @close="modals.switchCvModal" class="relative z-[99]">
      <TransitionChild
        as="template"
        enter="duration-300 ease-in"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-in"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 text-center"
              >
                CV Document
              </DialogTitle>
              <div class="mt-4 flex flex-col justify-center items-center">
                <vue-recaptcha
                  class="my-2"
                  v-show="showRecaptcha"
                  sitekey="6Ld99_woAAAAAKjULn8h7iplm6Bnx0IFN-IdVlqI"
                  size="normal"
                  theme="light"
                  hl="tr"
                  :loading-timeout="loadingTimeout"
                  @verify="recaptchaVerified"
                  @expire="recaptchaExpired"
                  @fail="recaptchaFailed"
                  @error="recaptchaError"
                >
                </vue-recaptcha>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
