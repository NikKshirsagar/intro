
const routes = [
  {
    path: '/nikita',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'AboutMe', component: () => import('pages/AboutMe.vue') },
      { path: 'MyEducation', component: () => import('pages/MyEducation.vue') },
      { path: 'MySkills', component: () => import('pages/MySkills.vue') },
      { path: 'MyHobbies', component: () => import('pages/MyHobbies.vue') },
      { path: 'MyGoals', component: () => import('pages/MyGoals.vue') }
    ]
  },

  // {
  //   path: '/AboutMe',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/AboutMe.vue') }
  //   ]
  // },

  // {
  //   path: '/MyEducation',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/MyEducation.vue') }
  //   ]
  // },

  // {
  //   path: '/MySkills',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/MySkills.vue') }
  //   ]
  // },

  // {
  //   path: '/MyHobbies',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/MyHobbies.vue') }
  //   ]
  // },

  // {
  //   path: '/MyGoals',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/MyGoals.vue') }
  //   ]
  // },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
