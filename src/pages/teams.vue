<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";
import { SelectorIcon } from "@heroicons/vue/solid";

const people = [
    {
        id: 1,
        name: 'Durward Reynolds',
        unavailable: false
    },
    {
        id: 2,
        name: 'Kenton Towne',
        unavailable: false
    },
    {
        id: 3,
        name: 'Therese Wunsch',
        unavailable: false
    },
    {
        id: 4,
        name: 'Benedict Kessler',
        unavailable: true
    },
    {
        id: 5,
        name: 'Katelyn Rohan',
        unavailable: false
    },
]
const selectedPerson = ref(people[0])
</script>

<template>
    <main class="container mx-auto p-6">
        <Listbox v-model="selectedPerson">
            <ListboxButton class="flex flex-row justify-between items-center w-full h-14 px-6 rounded-lg bg-slate-200 dark:bg-slate-800">
                <span class="text-slate-900 dark:text-slate-50">{{ selectedPerson.name }}</span>
                <SelectorIcon class="w-5 h-5 text-slate-900 dark:text-slate-50" />
            </ListboxButton>
            <ListboxOptions>
                <ListboxOption
                    class="text-slate-500 dark:text-slate-400"
                    v-for="person in people"
                    :key="person"
                    :value="person"
                    :disabled="person.unavailable"
                >{{ person.name }}</ListboxOption>
            </ListboxOptions>
        </Listbox>
    </main>
</template>