<script setup>
import { ref } from "vue";
import { Popover, PopoverButton, PopoverPanel, Switch } from "@headlessui/vue";
import IconButton from "@components/icon-button.vue";

const enabled = ref(false);

function toggleTheme() {
    if (enabled.value) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}
</script>

<template>
    <header class="w-full h-16 bg-slate-100 dark:bg-slate-800 shadow-md">
        <div class="container px-6 mx-auto flex flex-row items-center h-full">
            <div class="flex-1 flex flex-row justify-start">
                <Popover class="relative">
                    <PopoverButton>
                        <IconButton>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 m-auto text-slate-500 dark:text-slate-50"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </IconButton>
                    </PopoverButton>
                    <transition
                        enter-active-class="transition duration-200 ease-out"
                        enter-from-class="translate-y-1 opacity-0"
                        enter-to-class="translate-y-0 opacity-100"
                        leave-active-class="transition duration-150 ease-in"
                        leave-from-class="translate-y-0 opacity-100"
                        leave-to-class="translate-y-1 opacity-0"
                    >
                        <PopoverPanel class="absolute z-10">
                            <nav
                                class="flex flex-col w-auto h-auto space-y-4 p-6 bg-slate-50 dark:bg-slate-700 rounded-2xl shadow-lg"
                            >
                                <router-link
                                    class="text-sm font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider transition-colors hover:text-slate-900 dark:hover:text-slate-50"
                                    to="/"
                                >Accueil</router-link>
                                <router-link
                                    class="text-sm font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider transition-colors hover:text-slate-900 dark:hover:text-slate-50"
                                    to="/"
                                >Classements</router-link>
                                <router-link
                                    class="text-sm font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider transition-colors hover:text-slate-900 dark:hover:text-slate-50"
                                    to="/teams"
                                >Equipes</router-link>
                                <router-link
                                    class="text-sm font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider transition-colors hover:text-slate-900 dark:hover:text-slate-50"
                                    to="/"
                                >Live</router-link>
                            </nav>
                        </PopoverPanel>
                    </transition>
                </Popover>
            </div>
            <div class="flex-1 flex flex-row justify-center"></div>
            <div class="flex-1 flex flex-row justify-end">
                <div class="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-slate-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <Switch
                        v-model="enabled"
                        :class="enabled ? 'bg-slate-700' : 'bg-slate-600'"
                        class="relative inline-flex items-center h-6 rounded-full w-11 mx-2"
                        @click="toggleTheme"
                    >
                        <span class="sr-only">Enable dark mode</span>
                        <span
                            :class="enabled ? 'translate-x-6' : 'translate-x-1'"
                            class="inline-block w-4 h-4 transition duration-200 ease-in-out transform bg-slate-50 rounded-full"
                        />
                    </Switch>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-slate-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </header>
</template>