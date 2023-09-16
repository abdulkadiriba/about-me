<script setup lang="ts">
const route = useRoute();
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
const verificationClass: any = ref();
const verificationAnswer: any = ref("Download");
const verificationCode: any = ref();
const downloadCV = () => {
  verificationAnswer.value = "Please wait...";
  setTimeout(() => {
    if (verificationCode.value === "111111") {
      verificationClass.value = "bg-emerald-600";
      verificationAnswer.value = "Verification Successful";
      var dosyaURL = "/abdulkadiribaCV.pdf";
      var indirLink = document.createElement("a");
      indirLink.href = dosyaURL;
      indirLink.download = "abdulkadiribaCV.pdf";
      indirLink.click();
    } else {
      verificationAnswer.value = "Verification failed";
      verificationCode.value = "";
      verificationClass.value = "wrong-animate";
    }
    setTimeout(() => {
      verificationClass.value = "";
      verificationAnswer.value = "Download";
    }, 1000);
  }, 1000);
};
const navigation = ref([
  {
    name: "About Me",
    path: "/",
    icon: "ic:baseline-home",
  },
  {
    name: "My Works",
    path: "/works",
    icon: "material-symbols:workspace-premium",
  },
  {
    name: "Technologies",
    path: "/technologies",
    icon: "ph:code-bold",
  },
]);
const isActive = ref(false);

watch(
  () => route.path,
  () => (isActive.value = false)
);
</script>
<template>
  <div>
    <!-- Mobile -->
    <div
      class="block md:hidden backdrop-blur-sm bg-zinc-950/50 h-16 fixed z-50 w-full"
    >
      <div class="flex justify-between items-center w-full h-full px-5 py-2.5">
        <div class="font-semibold flex items-center">
          <img class="w-20" src="/assets/img/logo.png" alt="" />

          Wayne</div>
        <div>
          <Icon
            v-if="!isActive"
            @click="isActive = !isActive"
            name="radix-icons:hamburger-menu"
            color="white"
            size="32px"
          />
          <Icon
            v-if="isActive"
            @click="isActive = !isActive"
            name="material-symbols:close-rounded"
            color="white"
            size="32px"
          />
        </div>
      </div>
    </div>
    <div
      :class="isActive ? 'block' : 'hidden'"
      class="w-full md:block md:w-72 z-30 h-screen fixed backdrop-blur-sm bg-gradient-to-r from-zinc-950/50 to-zinc-950/50"
    >
      <div class="p-10 h-full flex flex-col justify-between content-between">
        <div class="text-center font-semibold text-xl">
          <img class="logo" src="/assets/img/logo.png" alt="" />
          Wayne
        </div>
        <div class="menu">
          <NuxtLink
            v-for="nav in navigation"
            :key="nav.path"
            :class="route.path === nav.path ? 'active' : ''"
            :to="nav.path"
            >
            <Icon
            :name="nav.icon"
            color="gray"
            size="24px"
            class="mr-1"
          />
            {{ nav.name }}</NuxtLink
          >
        </div>
        <div class="cv cursor-pointer text-center" @click="isOpen = true">
          CV
        </div>
      </div>
    </div>

    <!-- CV MODAL -->
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-[99]">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
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
              enter="duration-300 ease-out"
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
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  CV Document
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Enter the verification code provided to download the CV
                    document
                  </p>
                </div>
                <div class="mt-4">
                  <input
                    v-model="verificationCode"
                    class="px-2 py-2.5 w-full outline-2 outline-black bg-zinc-200 rounded-md text-black"
                    maxlength="6"
                    placeholder="Verification Code"
                  />
                </div>
                <div class="mt-4">
                  <button
                    :class="verificationClass"
                    type="button"
                    class="bg-black hover:shadow-3xl w-full rounded-md py-2 text-white hover:translate-y-0.5 duration-100"
                    @click="downloadCV"
                  >
                    {{ verificationAnswer }}
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<style>
.menu a {
  @apply duration-200 flex justify-center items-center text-lg font-semibold text-center px-5 py-2 my-2 border-l-2 border-r-2 border-transparent ;
}

.menu a:hover {
  @apply border-white;
  animation: pulse 3s infinite;
}

.menu .active {
  @apply border-white;
  animation: pulse 3s infinite;
}

.logo {
  filter: drop-shadow(2px 4px 16px #fff);
  animation: shining 2s infinite;
}

.cv {
  @apply hover:bg-zinc-100/20 px-5 py-2;
  animation: shining 2s infinite;
}

@keyframes pulse {
  0% {
    @apply bg-white/10;
  }

  50% {
    @apply bg-white/20;
    filter: drop-shadow(0px 0px 40px #fff);
    text-shadow: #fff 0 0 20px;
    color: #fff;
  }

  100% {
    @apply bg-white/10;
  }
}

@keyframes shining {
  0% {
    filter: drop-shadow(0px 0px 0px #fff);
  }

  45% {
    filter: drop-shadow(0px 0px 15px #fff);
  }

  50% {
    filter: drop-shadow(0px 0px 0px #fff);
  }

  55% {
    filter: drop-shadow(0px 0px 15px #fff);
  }

  100% {
    filter: drop-shadow(0px 0px 0px #fff);
  }
}

.wrong-animate {
  background-color: red;
  animation: moveButton 0.2s ease-in-out infinite;
}

@keyframes moveButton {
  0%,
  100% {
    transform: translateX(-10px);
  }

  50% {
    transform: translateX(10px);
    /* Sağa kaydır */
  }
}
</style>
