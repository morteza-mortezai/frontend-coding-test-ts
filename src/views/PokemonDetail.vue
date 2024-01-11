<template>
    <button v-on:click="$router.back" type="button" class="bg-blue-400 px-4 ">
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