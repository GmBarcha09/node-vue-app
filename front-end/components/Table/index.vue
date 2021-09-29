<template>
  <table class="table-auto w-full rounded border-collapsetext-left">
    <thead>
      <tr>
        <th
          v-for="column in columns"
          :key="column.dataIndex"
          class="py-5 bg-gray-200 text-lg text-left px-8"
        >
          {{ column.name }}
        </th>
        <th v-if="action" class="py-5 bg-gray-200 text-lg text-left px-8" style="width: 200px;">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in data"
        :key="item.id"
      >
        <td
          v-for="column in columns"
          :key="`${item} ${column.dataIndex}`"
          class="px-8 py-4"
        >
          {{ item[column.dataIndex] }}
        </td>
        <td v-if="action" class="px-8 py-4"  style="width: 200px;">
          <button
            class="w-full text-center bg-red-400 text-white px-8 py-2 hover:bg-red-600 rounded"
            @click="() => handleRemove(item.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  export default {
    props: {
      columns: { type: Array, required: true },
      data: { type: Array, default: [] },
      action: { type: Boolean },
      handleRemove: { type: Function }
    },
  }
</script>
