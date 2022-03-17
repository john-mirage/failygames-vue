<script setup>
const props = defineProps({
    activeLink: String,
})
</script>

<template>
    <nav class="flex flex-row justify-start items-center space-x-6">
        <router-link class="text-sm font-semibold text-slate-400 uppercase tracking-wider" :class="{'text-slate-50': props.activeLink === 'home'}" to="/">accueil</router-link>
        <router-link class="text-sm font-semibold text-slate-400 uppercase tracking-wider" :class="{'text-slate-50': props.activeLink === 'classements'}" to="/">classements</router-link>
        <router-link class="text-sm font-semibold text-slate-400 uppercase tracking-wider" :class="{'text-slate-50': props.activeLink === 'teams'}" to="/teams">équipes</router-link>
        <router-link class="text-sm font-semibold text-slate-400 uppercase tracking-wider" :class="{'text-slate-50': props.activeLink === 'live'}" to="/">live</router-link>
    </nav>
</template>