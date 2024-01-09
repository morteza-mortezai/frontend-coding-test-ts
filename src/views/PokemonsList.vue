<template>
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error?.message }}</span>
  <div  v-else-if="data">
    <AppTable v-bind:headers="tableHeaders" v-bind:items="data.results"  >
      <template #name="{ row }">
        <RouterLink v-bind:to="{ name: 'PokemonDetail', params: { name: row.name } }">
          {{ row.name }}
        </RouterLink>
      </template>
    </AppTable>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import usePokemon from '../services/pokemon'
import AppTable from '../components/pages/AppTable.vue'

// init
const pokemon = usePokemon()

// states
const page = ref(1)
const { isPending, isFetching, isError, data, error } = useQuery({
  queryKey: ['pokemons', page],
  queryFn: () => pokemon.getAll(page.value),
})
const tableHeaders=['name','url']

</script>