import { createRouter, createWebHistory } from "vue-router";

import KetoinIndex from "../components/ketoinpearls/index.vue";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import ItemsDetail from "../components/ketoinpearls/Detail/ItemsDetail.vue";
import Category from "../components/ketoinpearls/Category/index.vue";
import RecipesList from "../components/ketoinpearls/RecipesList/index.vue";
import PrintRecipes from "../components/ketoinpearls/PrintRecipes/PrintRecipes.vue";
import AdminPage from "../Admin/index.vue";
import UsersManager from "../Admin/users/UsersManager.vue";
import ParentManager from "../Admin/Category/ParentCategory/ParentManager.vue";
import ChildManager from "../Admin/Category/ChildCategory/ChildManager.vue";
import CommentManager from "../Admin/Comments/CommentManager.vue";
import IngredientsManager from "../Admin/Ingredients/IngredientsManager.vue";
import InstructionsManager from "../Admin/Instructions/InstructionsManager.vue";
import NutrientsManager from "../Admin/Nutrients/NutrientsManager.vue";
import RepliesManager from "../Admin/Replies/RepliesManager.vue";
import RecipeItemsManager from "../Admin/RecipeItems/RecipeItemsManager.vue";
const routes = [
  {
    path: "/",
    component: KetoinIndex,
    children: [
      {
        path: "/",
        component: Home,
        name: "Home",
      },
      {
        path: "/home/:id",
        component: ItemsDetail,
        name: "detailItems",
      },
      {
        path: "/category",
        component: Category,
        name: "category",
      },
      {
        path: "/category/:name",
        component: RecipesList,
        name: "recipesList",
      },
    ],
  },
  {
    path: "/admin",
    component: AdminPage,
    name: "AdminPage",
    children: [
      {
        path: "/admin/users",
        component: UsersManager,
        name: "usersManager",
      },
      {
        path: "/admin/parentCategories",
        component: ParentManager,
        name: "parentManager",
      },
      {
        path: "/admin/childCategories",
        component: ChildManager,
        name: "childManager",
      },
      {
        path: "/admin/repiceItems",
        component: RecipeItemsManager,
        name: "recipeItemsManager",
      },
      {
        path: "/admin/ingredients",
        component: IngredientsManager,
        name: "ingredientsManager",
      },
      {
        path: "/admin/instructions",
        component: InstructionsManager,
        name: "instructionsManager",
      },
      {
        path: "/admin/nutrients",
        component: NutrientsManager,
        name: "nutrientsManager",
      },
      {
        path: "/admin/comments",
        component: CommentManager,
        name: "commentsManager",
      },
      {
        path: "/admin/replies",
        component: RepliesManager,
        name: "repliesManager",
      },
    ],
  },
  {
    path: "/printRecipes",
    component: PrintRecipes,
    name: "PrintRecipes",
  },

  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
