<script src="../router/index.js"></script>
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-body-tertiary"><!-- 想把导航栏从浅色换成神色，就换成dark就可以了-->
  <div class="container">  <!--container-fluid的话就是比较宽-->
    <a class="navbar-brand" href="/">pz emulator</a> <!-- 设置商标  这里为了练习超链接就没有用router-link-->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
<!--          <a class="nav-link" aria-current="page" href="/home/">Home</a>-->
          <router-link class="nav-link" aria-current="page" :to="{name: 'home'}">Home</router-link>
        </li>
        <li class="nav-item">
<!--          <router-link class="nav-link" :to="{name: 'pk_index'}">pk</router-link>-->
          <a class="nav-link" href="/pk/">play</a>
        </li>
        <li class="nav-item">
          <router-link class=nav-link to="/matchHistory">Match History</router-link>  <!--也可以用"to"代替':to'，区别是to的话就是路径名，而：to是name的映射关系-->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ranking/">Ranking</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <a class="navbar-brand" href="#">
              <img src="@/assets/images/transparentIcon.png" width="33" height="33">
            </a>
            Anicaa_无害的码农
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="/user/bot">My bots</a></li>
            <li><a class="dropdown-item" href="#">Exit</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

</script>

<sytle scoped> 

</sytle>