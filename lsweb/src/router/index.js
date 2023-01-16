import { createRouter, createWebHistory } from 'vue-router'
import PKIndexView from "@/views/pk/PKIndexView"
import MatchHistoryIndexView from "@/views/matchHistory/MatchHistoryIndexView"
import RankingIndexView from "@/views/ranking/RankingIndexView"
import UserBotIndexView from "@/views/user/bot/UserBotIndexView"
import NotFound from "@/views/error/NotFound"
import HomeIndexView from "@/views/home/HomeIndexView"

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/home/",
  },
  
  {
    path: "/home/",
    name: "home",
    component: HomeIndexView,
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
