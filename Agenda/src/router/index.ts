import { createRouter, createWebHistory } from 'vue-router'

import HomeView            from '@/views/HomeView.vue';

import ContactsView        from '@/views/contact/ContactView.vue';
import AddContactView      from '@/views/addcontact/AddContactView.vue';
import EditContactView     from '@/views/edit/EditView.vue';
import DetailsContactView  from '@/views/details/DetailsView.vue';

import ContactsViewA       from '@/views2/contact/ContactViewA.vue';
import AddContactViewA     from '@/views2/addcontact/AddContactViewA.vue';
import EditContactViewA    from '@/views2/edit/EditViewA.vue';
import DetailsContactViewA from '@/views2/details/DetailsViewA.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',                 name: 'home',             component: HomeView},
    {path: '/Contacts',         name: 'Contacts',         component: ContactsView},
    {path: '/AddContact',       name: 'AddContact',       component: AddContactView},   
    {path: '/EditContactView',  name: 'EditContactView',  component: EditContactView}, 
    {path: '/DetailsContact',   name: 'DetailsContact',   component: DetailsContactView},
    {path: '/Contacts2',        name: 'Contacts2',        component: ContactsViewA},
    {path: '/AddContact2',      name: 'AddContact2',      component: AddContactViewA},   
    {path: '/EditContactView2', name: 'EditContactView2', component: EditContactViewA}, 
    {path: '/DetailsContact2',  name: 'DetailsContact2',  component: DetailsContactViewA},
  ]
})

export default router
