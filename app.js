let one = new Vue({
   el: "#vue-app-one",
   data: {
      title : "Vue App - One"
   }, 
   methods: {
      greet : function(){
         return "Hello from app ONE";
      }
   }, 
   computed: {

   }
});


let two = new Vue({
   el: "#vue-app-two",
   data: {
      title : "Vue App - Two"
   },
   methods: {
      changeTitle : function(){
         // this.title = "Degistirilmis Title";
         one.title = "Title Changed From Instance Two";
      }
   },
   computed: {
      greet: function () {
         return "Ypu dudes, this is app TWO, speaking to ya!!";
      }
   }
});

two.title = "Changed from outside of the instances";