<template>
    <header> 
        <h1> Agenda</h1>
    </header>
    <div class="links"> 
        <router-link to='/Contacts' class="routerlink"   > Contatos </router-link> 
        <router-link to='/AddContact' class="routerlink" > Novo Contato </router-link> 
        <router-link to='/ContactsA'  class="routerlink" > Contatos2 </router-link> 
        <router-link to='/AddContactA' class="routerlink"> Novo Contato2 </router-link> 
    </div>
</template>
<style scoped>
h1{
    font-size: 36px;
    color: white;
}
header{
    background:rgb(90,90,255);
    padding: 10px 30px;
    border-bottom-left-radius: 30px;
}
.links{
    margin: 10px 30px;
}
.routerlink{
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    background: rgb(90,90,255);
    color: white;
    padding: 3px 10px;
    border-radius: 10px;
    margin-left: 10px;    
}

</style>
