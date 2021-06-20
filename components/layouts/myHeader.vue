<template>
  <header>
    <div class="container">
      <img class="header-logo" src="@/static/img/logo.svg" alt="logo">
      <nav class="header-nav" v-bind:class="{ active: navIsOpen}">
        <ul>
          <li>
            <button class="close-nav-btn" @click="navIsOpen = !navIsOpen">x</button>
          </li>
          <li v-for="(item,i) in navData" :key="i">
            <a :href="item.link">{{item.text}}</a>
          </li>
        </ul>
      </nav>

      <button class="open-nav-btn" @click="navIsOpen = !navIsOpen">----</button>

      <header-search />
    </div>
  </header>
</template>
<script>
  import HeaderSearch from '~/components/HeaderSearch.vue'
  export default {
    components: {
      HeaderSearch
    },
    data() {
      return {
        navIsOpen: false,
        navData: [{
            text: 'Policy',
            link: '/'
          },
          {
            text: 'Economics',
            link: '/'
          },
          {
            text: 'Incidents',
            link: '/'
          },
          {
            text: 'Sports',
            link: '/'
          },
          {
            text: 'Culture',
            link: '/'
          },
        ]
      }
    },
  }

</script>

<style lang="scss" scoped>
  header {
    background: #292A2D;

    .open-nav-btn {
      border-top: 4px solid #BFC0C1;
      border-bottom: 4px solid #BFC0C1;
      padding: 0;
      margin: 0;
      line-height: initial;
      font-size: 36px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 41px;
      padding: 6px 2px 10px 0px;
      letter-spacing: -3px;
      background: none;
      border-left: none;
      border-right: none;
      color: #BFC0C1;
      cursor: pointer;
      display: none;
    }

    .close-nav-btn {
      background: none;
      border: none;
      color: #BFC0C1;
      font-size: 46px;
      cursor: pointer;
      margin-left: auto;
      display: none;
    }

    .container {
      min-height: 45px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .header-logo {}

      .header-nav {
        ul {
          display: flex;
          flex-direction: row;

          li {
            list-style-type: none;
            margin: 0px 16.5px;

            &:first-child {
              margin-left: 0px;
            }

            &:last-child {
              margin-right: 0px;
            }

            a {
              text-decoration: none;
              color: #BFC0C1;
              font-size: 14px;
              line-height: 24px;
            }
          }
        }
      }

      @media screen and (max-width:710px) {
         .open-nav-btn,
          .close-nav-btn{
            display: flex;
         }

        .header-nav {
          position: absolute;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, .7);
          z-index: 9;
          left: 0%;
          top: -200%;
          transition: .5s;
          &.active{
             transition: .5s;
              left: 0%;
              top: 0%;
          }

          ul {
            flex-direction: column;
            text-align: center;
            padding: 0;

            li {
              a {
                font-size: 22px;
                line-height: 40px;
              }
            }
          }
        }
      }
    }
  }

</style>
