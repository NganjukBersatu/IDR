export const routes = [
  { path: '/', component: () => import('./views/HomeView.vue') },
  { path: '/fitur', component: () => import('./views/FiturView.vue') },
  { path: '/harga', component: () => import('./views/HargaView.vue') },
  { path: '/faq', component: () => import('./views/FaqView.vue') },
  { path: '/kontak', component: () => import('./views/KontakView.vue') },
    { path: '/testimoni', component: () => import('./views/TestimoniView.vue') },
  { path: '/tentang', component: () => import('./views/TentangView.vue') },
]