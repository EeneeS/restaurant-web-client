<template>
  <header>
    <div id="title">
      <span class="material-symbols-outlined">restaurant_menu</span>
      <h1><router-link to="/">Restaurant Finder</router-link></h1>
    </div>
    <nav>
      <router-link to="/" id="home">HOME</router-link>
      <p>|</p>
      <router-link v-if="!loggedIn" to="/login">LOGIN</router-link>
      <router-link v-if="!loggedIn" to="/register" id="register">REGISTER</router-link>
      <p v-if="loggedIn" id="logout" @click="logout">LOGOUT</p>
      <router-link v-if="loggedIn" to="/admin" id="admin">ADMIN</router-link>
    </nav>
  </header>
  <div id="language">
    <p v-for="language in languages" 
    :key="language" 
    @click="selectLanguage(language)"
    :class="{ 'selected' : selectedLanguage === language}">
    {{ language }}
  </p>
</div>
</template>

<script>
export default {
    name: "HeaderComponent",
    data() {
      return {
        selectedLanguage: "en",
        languages: ['en', 'nl', 'fr']
      }
    },
    methods: {
      selectLanguage(language) {
        this.selectedLanguage = language;
        this.$emit('update-language', language);
      },
      logout() {
        this.$emit('logout');
      }
    },
    emits: ['update-language', 'logout'],
    props: ['loggedIn'],
}
</script>

<style scoped>
header {
  margin: 2rem 2rem 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
}

header #title {
  color: white;
  display: flex;
  align-items: flex-end;
}

header #title span {
  font-size: 3rem;
}

header #title h1 {
  font-size: 4rem;
  margin-left: 1rem;
}

a {
  text-decoration: none;
  color: white;
}

nav {
  width: 20rem;
  align-items: center;
  display: flex;
  justify-content: space-around;
}

nav a, #logout {
  font-size: 1.3rem;
}

#register {
  padding: 0.5rem;
  background-color: #FF6000;
  border-radius: 1rem;
  color: white;
}

#language {
  display: flex;
  gap: 1rem;
  margin-left: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
}

#logout {
  cursor: pointer;
  color: white;
}

.selected {
  font-weight: bold;
  color: #FF6000;
}

#admin {
  padding: 0.5rem;
  background-color: #FF6000;
  border-radius: 1rem;
  color: white;
}
</style>