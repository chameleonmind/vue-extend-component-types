<script setup lang="ts">
import ListTest from '@/components/ListTest.vue'
import NotShow from '@/NotShow/NotShow.vue'
import ShowTest from '@/Show/ShowTest.vue'
</script>

<template>
  <main>
    <ListTest class="list" />
    <ShowTest />
    <NotShow />
  </main>
</template>

<style scoped>
.list {
  margin-bottom: 2rem;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
