<template>
  <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    class="border rounded w-full px-5 py-3 mb-5"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
  export default {
    props: {
      value: { type: String },
      placeholder: { type: String },
    }
  }
</script>