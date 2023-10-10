<template>
  <HeaderComponent @update-language="updateLanguage" @logout="logout" :loggedIn="loggedIn"/>
  <RouterView @update-logged-in="updateLoggedIn" :language="selectedLanguage" :loggedIn="loggedIn"/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  data() {
    return {
      selectedLanguage: "en",
      loggedIn: false
    }
  },
  methods: {
    updateLanguage(language) {
      this.selectedLanguage = language;
    },
    updateLoggedIn() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
      localStorage.clear();
    }
  },
  components: { HeaderComponent }
}
</script>

<style scoped>

</style>
