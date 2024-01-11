<template>
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error?.message }}</span>
  <div v-else-if="data">
    <AppTable v-bind:headers="tableHeaders" v-bind:items="data.results">
      <template #name="{ row }">
        <RouterLink v-bind:to="{ name: 'PokemonDetail', params: { name: row.name } }">
          {{ row.name }}
        </RouterLink>
      </template>
    </AppTable>
    <!-- pagination -->
    <AppPagination class="mt-5" v-bind:page-count="pageCount" v-bind:total="count" v-bind:current-page="page"
     v-on:paginate="onPaginate"  />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import usePokemon from '../services/pokemon'
import AppTable from '../components/common/AppTable.vue';
import AppPagination from '../components/common/AppPagination.vue'

// init
const pokemon = usePokemon()

// states
const page = ref(1)
const pageCount = ref(10)
const { isPending, isError, data, error } = useQuery({
  queryKey: ['pokemons', page],
  queryFn: () => pokemon.getAll(page.value, pageCount.value),
})
const tableHeaders = ['name', 'url']

// computed
const count = computed(() => data.value?.count || 0)

// methods
function onPaginate(pageNumber: number) {
  page.value = pageNumber
}

</script>