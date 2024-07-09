<template>
    <header>
        <h1> Agenda</h1>
    </header>
    <div class="links">
        <router-link to='/Contacts' class="routerlink"> Contatos </router-link>
        <router-link to='/AddContact' class="routerlink"> Novo Contato </router-link>
        <router-link to='/ContactsA' class="routerlink"> Contatos2 </router-link>
        <router-link to='/AddContactA' class="routerlink"> Novo Contato2 </router-link>
    </div>
</template>
<style scoped>
h1 {
    font-size: 36px;
    color: white;
}

header {

    background: rgb(30, 30, 255);

    padding: 10px 30px;
    border-bottom-left-radius: 30px;
}

.links {
    margin: 10px 30px;
}

.routerlink {
    font-size: 16px;
    text-decoration: none;
    color: rgb(30, 30, 255);
    background: rgb(255, 255, 255);
    padding: 3px 10px;
    border-radius: 10px;
    margin-left: 10px;
    border-style: solid;
    border-color: rgb(30, 30, 255);
}

.router-link-exact-active {
    background: rgb(30, 30, 255);
    color: rgb(255, 255, 255);
    font-weight: bold;

}
</style>
