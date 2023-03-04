<template>
  <div>
  <!--    <lan-tern></lan-tern>--> <!--灯笼-->
    <NavBar></NavBar>  <!--3. 要用它的话，把他放在template标签中就可以了-->
    <router-view/>   <!--6.vue里面的路径是这样的。 主页里包含两个内容，一个是NavBar，一个是router-view。 router-view会自动根据我们的网站来变
    那么怎么变呢？在router模块下的index.js中进行定义-->
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'    //1. 导入组件, 注意旧版本就不要用@了，用.  都是代表根目录
import "bootstrap/dist/css/bootstrap.min.css"   //4. 要用bootstrap，需要先导入css
import "bootstrap/dist/js/bootstrap"            //5. 再导入js 。   注意，在js中单引号和双引号是一样的。
/*import LanTern from "@/components/LanTern.vue"*/ // 灯笼不用了

export default {
  components: {   //2. 想要用哪些组件，就要放在components这个关键字里面
    NavBar/*,
    LanTern灯笼不用了*/
  }
}
</script>

<style >
body {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
}
</style>
