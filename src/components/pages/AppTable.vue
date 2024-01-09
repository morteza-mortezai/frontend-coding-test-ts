<template>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th v-for="h in headers" v-bind:key="h" scope="col" class="px-6 py-3">
                    {{ h }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in items" v-bind:key="index"
                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td v-for="h in headers" v-bind:key="h" class="px-6 py-4">
                    <span v-if="$slots[h]">
                        <slot v-bind:name="h" v-bind:row="row"></slot>
                    </span>
                    <span v-else>
                        {{ row[h] }}
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts" setup>
interface tableProps {
    headers: string[],
    items: any[]
}
defineProps<tableProps>()
</script>