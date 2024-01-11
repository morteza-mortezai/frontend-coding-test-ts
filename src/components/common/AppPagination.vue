<template>
    <nav>
        <ul>
            <li v-on:click="onPaginate(1)">
                <a href="#" v-bind:class="{ selected: p === selectedPage }">first</a>
            </li>
            <li v-for="p in pages" v-bind:key="p" v-on:click="onPaginate(p)">
                <a href="#" v-bind:class="{ selected: p === selectedPage }">{{ p }}</a>
            </li>
            <li v-on:click="onPaginate(lastPageNumber)">
                <a href="#" v-bind:class="{ selected: p === selectedPage }">last</a>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{ total: number, pageCount: number, currentPage: number }>()
const emits = defineEmits<{ paginate: number }>()

// states
const selectedLimit = ref(10)
const selectedPage = ref(props.currentPage)


// computed
const pages = computed(
    () => {
        const allPages = Math.ceil(props.total / props.pageCount)
        const allPagesArr = []
        for (let i = 1; i <= allPages; i++) {
            allPagesArr.push(i)
        }
        const activePage = selectedPage.value
        const neighbours = [activePage, activePage - 1, activePage + 1, activePage - 2,
            activePage + 2, activePage - 3, activePage + 3, activePage - 4, activePage + 4]
        // return neighbours.sort()
        const showing = []
        neighbours.forEach(n => {
            if (allPagesArr.indexOf(n) > -1 && showing.length < 5) {
                showing.push(n)
            }

        });
        function compareNumbers(a, b) {
            return a - b;
        }
        showing.sort(compareNumbers)
        return showing
    })
const lastPageNumber=computed(()=>Math.ceil(props.total/props.pageCount))
// methods
function onPaginate(page: number) {
    selectedPage.value = page
    emits('paginate', selectedPage.value)
}

watch(
    () => props.currentPage,
    (newValue) => {
        selectedPage.value = newValue
    })


</script>
<style scoped>
ul {
    @apply flex items-center -space-x-px h-8 text-sm;
}

ul li a {
    @apply flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
}

ul li a.selected {
    @apply text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700;
}

select {
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
</style>