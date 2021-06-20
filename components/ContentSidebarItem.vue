<template>
  <div class="sidebar-item">
    <span class="sidebar-item__tag">{{data.type}}</span>
    <nuxt-link class="sidebar-item__link" :to="data.link">{{data.title.rendered}}</nuxt-link>
    <div class="sidebar-item__footer">
      <span class="sidebar-item__date">{{data.date}}</span>
      <span class="sidebar-item__user">{{data.uagb_author_info.display_name}}</span>
    </div>
    
    <!-- <div style="color:#fff">    {{data}}</div> -->

  </div>
</template>

<script>
  export default {
    props: ['data']
  }

</script>

<style lang="scss" scoped>
  .sidebar-item {
    padding-bottom: 20px;
    border-bottom: 1px solid #3E4044;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;

    &__tag {
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

    &__link {
      font-weight: bold;
      text-decoration: none;
      font-size: 14px;
      line-height: 19px;
      text-transform: uppercase;
      margin-bottom: 10px;
      color: #BFC0C1;
    }

    &__footer {
      color: #8F9092;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
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
  }

</style>
