<script setup>
import TopAppBar from '@components/top-app-bar.vue';
</script>

<template>
    <TopAppBar />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<style>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 250ms ease-out;
}
</style>