import { createRouter, createWebHistory } from 'vue-router' /*默认的，不用动*/
/*把之前实现的几个组件（网页）import进来*/
import PKIndexView from "@/views/pk/PKIndexView"
import MatchHistoryIndexView from "@/views/matchHistory/MatchHistoryIndexView"
import RankingIndexView from "@/views/ranking/RankingIndexView"
import UserBotIndexView from "@/views/user/bot/UserBotIndexView"
import NotFound from "@/views/error/NotFound"
import HomeIndexView from "@/views/home/HomeIndexView"

const routes = [
  {
    path: "/",  //相对路径，因此从/开始。 这样理解： localhost:8080/  内容
    name: "root", // 名字随便起
    redirect: "/home/",
  },
  
  {
    path: "/home/", //同理，开头的/就是8080后面那个/
    name: "home",
    component: HomeIndexView, //点了截取哪个地方
  },

  {
    path: "/pk/",
    name: "pk_index",
    component: PKIndexView,
  },

  {
    path: "/ranking/",
    name: "ranking_index",
    component: RankingIndexView,
  },

  {
    path: "/error/",
    name: "notFound_index",
    component: NotFound,
  },

  {
    path: "/user/bot",
    name: "userBot_index",
    component: UserBotIndexView,
  },

  {
    path: "/matchHistory",
    name: "matchHistory_index",
    component: MatchHistoryIndexView,
  },

  {
    path: "/:catchAll(.*)", //从上往下查找的。这个是没有找到，就直接跳转到404
    redirect: "/error/"
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
