<script setup>
import { ref, watch } from "vue";
import { Popover, PopoverButton, PopoverPanel, Switch } from "@headlessui/vue";
import { MenuIcon, SunIcon, MoonIcon } from "@heroicons/vue/solid";

const enabled = ref(false);

watch(enabled, async (newEnabled, oldEnabled) => {
    if (!oldEnabled && newEnabled) {
        document.documentElement.classList.add("dark");
    } else if (oldEnabled && !newEnabled) {
        document.documentElement.classList.remove("dark");
    }
});
</script>

<template>
    <header class="w-full h-16 bg-slate-100 dark:bg-slate-800 shadow-md">
        <div class="container px-6 mx-auto flex flex-row items-center h-full">
            <div class="flex-1 flex flex-row justify-start">
                <Popover class="relative">
                    <PopoverButton>
                        <span class="flex w-12 h-12 rounded-full cursor-pointer">
                            <MenuIcon class="h-6 w-6 m-auto text-slate-500 dark:text-slate-50" />
                        </span>
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
                                    to="/leaderboards"
                                >Classements</router-link>
                                <router-link
                                    class="text-sm font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider transition-colors hover:text-slate-900 dark:hover:text-slate-50"
                                    to="/teams"
                                >Equipes</router-link>
                                <router-link
                                    class="text-sm font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider transition-colors hover:text-slate-900 dark:hover:text-slate-50"
                                    to="/live"
                                >Live</router-link>
                            </nav>
                        </PopoverPanel>
                    </transition>
                </Popover>
            </div>
            <div class="flex-1 flex flex-row justify-center"></div>
            <div class="flex-1 flex flex-row justify-end">
                <div class="flex items-center">
                    <SunIcon
                        class="h-5 w-5"
                        :class="!enabled ? 'text-yellow-600' : 'text-slate-400'"
                    />
                    <Switch
                        v-model="enabled"
                        :class="enabled ? 'bg-slate-600' : 'bg-slate-300'"
                        class="relative inline-flex items-center h-6 rounded-full w-11 mx-2"
                    >
                        <span class="sr-only">Enable dark mode</span>
                        <span
                            :class="enabled ? 'translate-x-6' : 'translate-x-1'"
                            class="inline-block w-4 h-4 transition duration-200 ease-in-out transform bg-emerald-500 dark:bg-emerald-400 rounded-full"
                        />
                    </Switch>
                    <MoonIcon
                        class="h-5 w-5"
                        :class="enabled ? 'text-yellow-200' : 'text-slate-400'"
                    />
                </div>
            </div>
        </div>
    </header>
</template>