<template>
  <section class="container mx-auto">
    <h2 class="my-5 mb-10 text-4xl text-gray-500">Create User</h2>
    <div>
      <form>
        <div>
          <Input placeholder="Name" v-model="username" />
        </div>
        <div>
          <Input placeholder="Email Address" v-model="email" />
        </div>
        <div>
          <Input placeholder="Address" v-model="address" />
        </div>
        <div>
          <Input placeholder="Age" v-model="age" />
        </div>

        <button
          class="bg-blue-500 text-white hover:bg-blue-600 rounded px-10 py-3"
          @click.prevent="handleSubmit()"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
  export default {
    props: {
      onSubmit: { type: Function }
    },

    data() {
      return {
        username: '',
        email: '',
        address: '',
        age: '',
      }
    },

    methods: {
      handleSubmit() {
        this.onSubmit({
          username: this.username,
          email: this.email,
          address: this.address,
          age: this.age
        })
      }
    }
    
  }
</script>
