<template>
  <h2 class="flex justify-between my-5 mb-10">
    <h2 class="text-4xl text-gray-500"> Test task </h2>
    <button
      class="bg-blue-500 text-white hover:bg-blue-600 rounded px-10"
      @click="$router.push('/user/create')"
    >
      Create
    </button>
  </h2>
</template>