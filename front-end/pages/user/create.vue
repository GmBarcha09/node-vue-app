<template>
  <CreateUser :onSubmit="onSubmit"/>
</template>

<script lang="ts">
  interface IValues {
    email: String,
    username: String,
    address: String,
    age: String,
  }
  export default {
    methods: {
      async onSubmit(values: IValues) {
        try {
          await this.$axios.post('/user', values);
          this.$router.push('/')
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
</script>
