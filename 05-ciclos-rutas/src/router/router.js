import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from './auth-guard';

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },

  {
    path: "/pokemon",
    name: "pokemon",
    component: () => import("@/modules/pokemon/layouts/PokemonLayouts.vue"),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () => import("@/modules/pokemon/pages/ListPage.vue"),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () => import("@/modules/pokemon/pages/About.vue"),
      },
      {
        path: "pokemonid/:id",
        name: "pokemon-id",
        component: () => import("@/modules/pokemon/pages/PokemonPage.vue"),
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
      {
        path: "",
        redirect: { name: "pokemon-about" },
      },
    ],
  },

  // DBZ Layout
  {
    path: "/dbz",
    name: "dbz",
    beforeEnter: [ isAuthenticatedGuard ],
    component: () => import("@/modules/dbz/layouts/DragonBallLayout.vue"),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () => import("@/modules/dbz/pages/Characters.vue"),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () => import("@/modules/dbz/pages/About.vue"),
      },
      {
        path: "",
        redirect: { name: "dbz-characters" },
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "NoPageFound" */ "@/modules/shared/pages/NoPageFound"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Guard Global - Síncrono
// router.beforeEach( ( to, from, next ) => {
//     // console.log({ to, from, next });

// const random = Math.random() * 100
// if( random > 50 ) {
//     console.log('autenticado')
//     next()
// } else {
//     console.log(random, 'bloqueado por el beforeEach Guard')
//     next({ name: 'pokemon-home' })
// }
//     // next()
// })

// const canAccess = () => {
//     return new Promise( resolve => {

//         const random = Math.random() * 100
//         if( random > 50 ) {
//             console.log('Autenticado - canAccess')
//             resolve(true)
//         } else {
//             console.log(random, 'bloqueado por el beforeEach Guard - canAccess')
//             resolve(false)
//         }

//     })
// }

// router.beforeEach( async(to, from, next) => {

//     const authorized = await canAccess()

//     authorized
//         ? next()
//         : next({ name: 'pokemon-home' })

// })

export default router;
