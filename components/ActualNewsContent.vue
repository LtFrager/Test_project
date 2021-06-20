<template>
  <section class="actual-news-section">
    <div class="actual-news-section__actions">
      <section-title :title="'Actual news'" />

      <div class="actual-news-section__fields-box">
        <button class="actual-news-section__show-like-btn" @click="likeFilter()">{{showLikeBtn}} <img
            src="/img/like-btn.svg" alt="icon">
        </button>

        <v-select placeholder="filter" class="actual-news-section__select" v-model="defaultSelected" label="text"
          :options="options" @input="setSelected"></v-select>
      </div>
    </div>

    <template v-if="posts">
      <div class="actual-news-section__grid">
        <actual-news-item v-for="(item,i) in posts" :key="i" :data="item" @likeCliced="toggleFavorite" />
      </div>

      <button id="show-more-btn" class="show-more-btn" @click="loadMore()">
        {{loadMoreText}}
      </button>
    </template>
  </section>

</template>

<script>
  import SectionTitle from '~/components/SectionTitle.vue'
  import ActualNewsItem from '~/components/ActualNewsItem.vue'
  export default {
    props: ['data'],

    components: {
      SectionTitle,
      ActualNewsItem
    },
    data() {
      return {
        loadMoreText: 'show more',
        selected: [],
        showLiked: false,
        showLikeBtn: 'show favorites',
        defaultSelected: [],
        allPosts: [],
        options: [{
            text: 'new to old',
            value: 'desc'
          },
          {
            text: 'old to new',
            value: 'asc'
          },
        ],
        posts: JSON.parse(JSON.stringify(this.data)),
        page: 1,
        ActualNewsData: [{
          tag: 'e',
          link: 'asd',
          text: 'text',
          date: 'date',
          userPost: 'user',
          tall: false,
          wide: false,
        }],
      }
    },

    created() {
      this.defaultSelected = this.options[0]
    },

    methods: {
      setSelected() {
        this.page == 1
        this.$axios.get(`/wp-json/wp/v2/posts?filter[orderby]=date&order=${this.defaultSelected.value}`).then(res => {
          this.posts = res.data
        })
      },
      async loadMore() {
        this.loadMoreText = 'loading ...'
        this.page++
        this.$axios.get(
          `/wp-json/wp/v2/posts?filter[orderby]=date&order=${this.defaultSelected.value}&page=${this.page}`).then(
          res => {
            for (let i = 0; i < res.data.length; i++) {
              this.posts.push(res.data[i])
            }
            this.loadMoreText = 'show more'
          })
      },
      toggleFavorite(id) {
        const post = this.posts.find(element => element.id == id);
        if (post) {
          if (post.favorite && post.favorite == true) {
            post.favorite = false
          } else {
            post['favorite'] = true;
          }
        }
      },
      likeFilter() {
        if (this.showLiked == false) {
          this.showLiked = true
          this.allPosts = this.posts
          this.posts = this.posts.filter(element => element.favorite == true)
          this.showLikeBtn = 'show all'
        } else {
          this.showLiked = false
          this.posts = this.allPosts
          this.showLikeBtn = 'show favorites'
        }
      }
    }
  }

</script>

<style lang="scss">
  .show-more-btn {
    position: relative;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #BFC0C1;
    background: none;
    border: none;
    position: relative;
    margin: 100px;
    text-transform: uppercase;
    margin: 50px auto 85px;
    display: flex;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      background: url(/img/show-more-btn.svg);
      width: 50px;
      height: 50px;
      left: -18px;
      top: -16px;
    }
  }

  .actual-news-section__select {
    width: 166px;
    margin-left: 27px;

    .vs__search::placeholder,
    .vs__dropdown-toggle,
    .vs__dropdown-menu {
      background: #282B2E;
      box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.15);
      border: none;
      color: #BFC0C1;
      text-transform: lowercase;
      font-variant: small-caps;
    }

    .vs__selected {
      color: #BFC0C1;
    }

    .vs__open-indicator {
      fill: #fff;
      transform: scale(.5);
    }

    .vs__clear {
      display: none;
    }

    .vs__dropdown-menu {}
  }

</style>

<style lang="scss" scoped>
  @import "vue-select/src/scss/vue-select.scss";

  .actual-news-section {
    &__actions {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      @media screen and (max-width:654px) {
        margin-bottom: 30px;
      }
    }

    &__fields-box {
      display: flex;
      margin-left: auto;
    }

    &__show-like-btn {
      font-size: 15px;
      line-height: 17px;
      color: #BFC0C1;
      background: #282B2E;
      box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.15);
      width: 166px;
      height: 32px;
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      padding: 10px 20px 10px 10px;
      cursor:pointer;
    }

    &__grid {
      display: grid;
      grid-auto-flow: row dense;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 200px;
      gap: 30px 30px;

      @media screen and (max-width:1070px) {
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (max-width:600px) {
        grid-template-columns: 1fr;
      }
    }
  }

</style>
