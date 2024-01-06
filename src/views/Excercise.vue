<template>
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error?.message }}</span>
  <ul v-else-if="data">
    <li v-for="pok in data.results" v-bind:key="pok.url">
      <RouterLink v-bind:to="{ name: 'PokemonDetail', params: { name: pok.name } }">
        {{ pok?.name }}
      </RouterLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import usePokemon from '../services/pokemon'

// init
const pokemon = usePokemon()

// states
const page = ref(1)
const { isPending, isFetching, isError, data, error } = useQuery({
  queryKey: ['pokemons', page],
  queryFn: () => pokemon.getAll(page.value),
})

</script>