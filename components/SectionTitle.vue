<template>
  <div class="section-title">
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.0616191 16.7663L-6.39503e-05 2.23367C-6.39087e-05 1.28375 1.02388 0.691584 1.83811 1.16038L14.4586 8.37736C15.2728 8.84616 15.2851 10.0305 14.4709 10.4993L1.92446 17.8273C1.0979 18.3084 0.061619 17.7163 0.0616191 16.7663Z"
        fill="#DCA74A" />
    </svg>
    <h2>
      {{title}}
    </h2>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }

</script>

<style lang="scss" scoped>
  .section-title {
      display: flex;
      align-items: center;
    svg {}

    h2 {
      margin-bottom: 20px;
      font-weight: bold;
      margin-left: 10px;
      font-size: 25px;
      line-height: 24px;
      text-transform: uppercase;    
      color: #BFC0C1;
    }
  }

</style>
