<template>
  <div class="container grid-container">
    <div class="content">
      <actual-news-content :data="ActualNewsData" />
    </div>
    <div class="sidebar">
      <content-sidebar :data="latestNewsData" />
    </div>
  </div>
</template>

<script>
  import ContentSidebar from '~/components/ContentSidebar.vue'
  import ActualNewsContent from '~/components/ActualNewsContent.vue'
  export default {
    components: {
      ContentSidebar,
      ActualNewsContent
    },
    data() {
      return {
        latestNewsData: [],
        ActualNewsData: []
      }
    },

    async asyncData({
      $axios,
    }) {
      const latestNewsData = await $axios.$get('/wp-json/wp/v2/posts?categories=26')
      const ActualNewsData = await $axios.$get('/wp-json/wp/v2/posts')
      return {
        latestNewsData,
        ActualNewsData
      }
    },
  }

</script>

<style lang="scss" scoped>
  .grid-container {
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 30px 30px;
    grid-template-areas:
      "content content content sidebar";
      @media screen and (max-width:768px){
          grid-template-areas:
      "content content content content"
      "sidebar sidebar sidebar sidebar";
      }
  }

  .content {
    grid-area: content;
  }

  .sidebar {
    grid-area: sidebar;
  }

</style>
