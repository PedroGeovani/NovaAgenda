import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/contact/ContactView.vue'
import AddContactView from '../views/addcontact/AddContactView.vue'
import EditContactView from '../views/edit/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/Contacts', name: 'Contacts', component: ContactsView},
    {path: '/AddContact', name: 'AddContact', component: AddContactView},   
    {path: '/EditContactView', name: 'EditContactView', component: EditContactView},    
  ]
})

export default router
