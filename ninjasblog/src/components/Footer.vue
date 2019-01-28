<template>
   <footer>
      <p>{{ copyright }} {{title}}</p>
   </footer>
</template>

<script>
export default {
   props: {
      title : {
         type: String
      }
   },
  data() {
    return {
       copyright : "Created at home - 2019 - by "
    }
  }
}
</script>

<style scoped>
   footer {
      background-color: #222;
      margin-top: 224px;
   }
   p {
      padding: 12px 24px;
      text-align: center;
      font-size: 24px;
      color: lightgreen;
   }

</style>
