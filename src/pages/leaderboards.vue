<script setup>
import {ref} from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import {CheckIcon, SelectorIcon} from '@heroicons/vue/solid'

const filter = [
  {name: 'Classement général'},
  {name: 'La petite foulée (Q1)'},
  {name: 'Remise en selle (Q2)'},
  {name: 'En toute adherace (Q3)'},
]
const selectedPerson = ref(filter[0])
</script>

<template>
  <main class="container mx-auto p-6">
    <h1 class="text-2xl text-slate-900 dark:text-slate-50 mb-6">Les classements</h1>

    <Listbox v-model="selectedPerson">
      <div class="relative mt-1 mb-6">
        <ListboxButton class="relative w-full py-3 pl-3 pr-10 text-left text-slate-50 bg-slate-800 rounded shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          <span class="block truncate">{{ selectedPerson.name }}</span>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true"/>
          </span>
        </ListboxButton>
        <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
          <ListboxOptions class="absolute w-full py-1 mt-2 overflow-auto text-base bg-slate-700 rounded shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption
                v-slot="{ active, selected }"
                v-for="view in filter"
                :key="view.name"
                :value="view"
                as="template"
            >
              <li
                  :class="[
                  active ? 'text-slate-50 bg-slate-600' : 'text-slate-50',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]"
              >
                <span
                    :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                >{{ view.name }}</span
                >
                <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-400"
                >
                  <CheckIcon class="w-5 h-5" aria-hidden="true"/>
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>

    <table class="w-full">
      <thead class="hidden">
      <tr>
        <th>Position</th>
        <th>Equipe</th>
        <th>Participant</th>
        <th>Points</th>
      </tr>
      </thead>
      <tbody>
      <tr class="block mb-4 p-4 rounded bg-slate-800">
        <td data-head="Position"
            class="block text-slate-50 font-medium before:content-[attr(data-head)] before:text-slate-400 before:inline-block before:w-32">
          1
        </td>
        <td data-head="Equipe"
            class="block text-slate-50 font-medium before:content-[attr(data-head)] before:text-slate-400 before:inline-block before:w-32">
          Rasta RoRocket
        </td>
        <td data-head="Participant"
            class="block text-slate-50 font-medium before:content-[attr(data-head)] before:text-slate-400 before:inline-block before:w-32">
          Jamie Ross
        </td>
        <td data-head="Points"
            class="block text-slate-50 font-medium before:content-[attr(data-head)] before:text-slate-400 before:inline-block before:w-32">
          293
        </td>
      </tr>
      <tr class="block mb-4 p-4 rounded bg-slate-800">
        <td data-head="Position"
            class="block text-slate-50 font-medium before:content-[attr(data-head)] before:text-slate-400 before:inline-block before:w-32">
          2
        </td>
        <td data-head="Equipe"
            class="block text-slate-50 font-medium before:content-[attr(data-head)] before:text-slate-400 before:inline-block before:w-32">
          Rasta RoRocket
        </td>
        <td data-head="Participant"
            class="block text-slate-50 font-medium before:content-[attr(data-head)] before:text-slate-400 before:inline-block before:w-32">
          Jamie Ross
        </td>
        <td data-head="Points"
            class="block text-slate-50 font-medium before:content-[attr(data-head)] before:text-slate-400 before:inline-block before:w-32">
          280
        </td>
      </tr>
      </tbody>
    </table>
  </main>
</template>