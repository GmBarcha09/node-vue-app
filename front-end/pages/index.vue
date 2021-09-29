<template>
  <section class="container mx-auto">
    <Heading />
    <div>
      <Table
        :columns="columns"
        :data="data"
        action
        :handleRemove="handleRemove"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      columns: [
        {
          dataIndex: 'username',
          name: 'Name',
        },
        {
          dataIndex: 'email',
          name: 'Email',
        },
        {
          dataIndex: 'address',
          name: 'Address',
        },
        {
          dataIndex: 'age',
          name: 'Age',
        },
      ],
      data: [],
    }
  },

  async fetch() {
    const res: any = await this.$axios.get('/user')
    this.data = res?.data?.list
  },

  methods: {
    async handleRemove(id: String) {
      try {
        await this.$axios.delete(`/user/${id}`)
        this.$fetch()
        alert('User delete successfully!');
      } catch (error) {
        console.error(error);
      }
    }
  }
  
})
</script>
