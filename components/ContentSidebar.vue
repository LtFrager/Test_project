<template>
  <aside class="latest-news-sidebar">

    <section-title :title="'latest news'" />

    <content-sidebar-item v-for="(item,i) in data" :key="i" :data="item" />

<!-- <div style="color:#fff"> {{data}}</div> -->
   
  </aside>
</template>

<script>
  import SectionTitle from '~/components/SectionTitle.vue'
  import ContentSidebarItem from '~/components/ContentSidebarItem.vue'
  export default {
    props: ['data'],
    components: {
      SectionTitle,
      ContentSidebarItem,
    },
    data() {
      return {
        sidebarData: [
          {
            tag: 'e',
            link: 'asd',
            text: 'text',
            date: 'date',
            userPost: 'user'
          },
        ]
      }
    },
  }

</script>

<style lang="scss" scoped>
.latest-news-sidebar{
  width: 100%;
}
</style>
