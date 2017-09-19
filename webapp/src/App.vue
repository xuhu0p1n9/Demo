<template>
  <div id="app">
      

    <HeaderView></HeaderView>
    
    
    <HomeView></HomeView> 

 
    <FooterView></FooterView>  

  
  </div>
</template>

<script>

import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
import HomeView from './components/HomeView.vue';
export default{

  components:{

      HeaderView,
      FooterView,
      HomeView

  }

}

</script>
<style scoped>
  

  @import './assets/css/index.css';
  @import './assets/css/swiper.min.css';

</style>
