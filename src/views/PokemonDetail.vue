<template>
    <button v-on:click="$router.back" type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="rotate-180 w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
        Back
    </button>
    <span v-if="isPending">Loading...</span>
    <span v-else-if="isError">Error: {{ error?.message }}</span>
    <ul v-else-if="data">
        {{ data }}
    </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import usePokemon from '../services/pokemon'

// init
const pokemon = usePokemon()

const props = defineProps(['name'])
// states
const page = ref(1)
const { isPending, isFetching, isError, data, error } = useQuery({
    queryKey: ['pokemonsDetail', page],
    queryFn: () => pokemon.getDetail(props.name),
})

</script>