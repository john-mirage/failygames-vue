<script setup>
import Navigation from '@components/navigation.vue';

const props = defineProps({
    activeLink: String,
});
</script>

<template>
    <header class="w-full h-16 bg-slate-800">
        <div class="container px-6 mx-auto flex flex-row h-full">
            <div class="flex-1 flex flex-row justify-start"></div>
            <div class="flex-1 flex flex-row justify-center h-full">
                <Navigation :activeLink="props.activeLink" />
            </div>
            <div class="flex-1 flex flex-row justify-end"></div>
        </div>
    </header>
</template>