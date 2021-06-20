<template>
  <div class="actual-new-item" v-bind:class="{ wide: data.wide==true, tall: data.tall==true, Liked: isLiked }">
    <img class="actual-new-item__img" :src="imgUrl" loading="lazy" alt="img">
    <span class="actual-new-item__tag">{{data.type}}</span>
    <nuxt-link class="actual-new-item__title" :to="data.link">{{data.title.rendered}}</nuxt-link>
    <div class="actual-new-item__footer">
      <span class="actual-new-item__date">{{data.date}}</span>
      <span class="actual-new-item__user">{{data.uagb_author_info.display_name}}</span>
      <button class="actual-new-item__like-btn" v-bind:class="{ active: isLiked }" @click="isLiked = !isLiked,likeCliced()"></button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        wideItem: false,
        tallItem: false,
        isLiked: false,
        imgUrl:'https://i.gifer.com/origin/d0/d0fc7bdc9a240be0950efb47f3c90f81_w200.gif',
        imageData: []
      }
    },

    mounted() {
      this.$axios.get(`/wp-json/wp/v2/media/${this.data.featured_media}/`).then(
        res => {
          if (res.data.hasOwnProperty('media_details') 
          && res.data.media_details.hasOwnProperty('sizes') 
          && res.data.media_details.sizes.hasOwnProperty('medium')
          && res.data.media_details.sizes.medium.hasOwnProperty('source_url') ){
            this.imgUrl = res.data.media_details.sizes.medium.source_url
          }
        })
    },
    methods:{
      likeCliced(){
        this.$emit('likeCliced', this.data.id)
      }
    }
  }

</script>

<style lang="scss" scoped>
  .actual-new-item {
    position: relative;

    &.tall {
      grid-row: span 2;
      grid-column: 1;
    }

    &.wide {
      grid-column: span 2;
      grid-row: 1;
    }

    &__img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(0.5);
      min-height: 200px;
    }

    &__tag {
      position: absolute;
      right: 0;
      top: 0;
      background: #DCA74A;
      border: 1px solid #DCA74A;
      color: #1E2124;
      box-sizing: border-box;
      text-transform: uppercase;
      font-size: 12px;
      line-height: 24px;
      padding: 2px 14px;
      margin-bottom: 10px;
    }

    &__footer {
      display: flex;
      color: #8F9092;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      position: absolute;
      bottom: 0;
      padding: 0px 20px 16px;
      width: 100%;
      box-sizing: border-box;
    }

    &__title {
      font-weight: bold;
      text-decoration: none;
      font-size: 14px;
      line-height: 19px;
      text-transform: uppercase;
      margin-bottom: 10px;
      color: #BFC0C1;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      padding: 5px 20px;
      box-sizing: border-box;
      margin-bottom: 30px;
    }

    &__date {
      margin-right: 5px;
    }

    &__user {
      position: relative;
      padding-left: 10px;

      &:before {
        content: '';
        position: absolute;
        background-image: url('/img/grey-triangle.svg');
        width: 5px;
        height: 5px;
        background-size: cover;
        left: 0;
        top: 50%;
        transform: translate(-0%, -50%);

      }
    }

    &__like-btn {
      background-image: url('/img/like-btn.svg');
      background-color: transparent;
      width: 16px;
      height: 14px;
      border: none;
      outline: none;
      background-position: center;
      background-size: contain;
      padding: 0;
      background-repeat: no-repeat;
      margin-left: auto;
      cursor: pointer;

      &.active {
        background-image: url('/img/like-btn-active.svg')
      }
    }
  }

</style>
