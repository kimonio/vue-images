<template>
  <div>
    <div class="ui secondary pointing menu">
      <a href="/" class="active item">
        Vue Images
      </a>
      <div class="right menu" v-if="isLoggedIn">
        <a class="ui item">
          Gallery
        </a>
        <a class="ui item">
          Upload
        </a>
        <a class="ui item" @click="logout">
          Logout
        </a>
      </div>
      <div class="right menu">
        <a class="ui item" @click="login">
          Login
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  methods: {
    ...mapActions([
      'login',
      'logout'
    ])
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ])
  },
};
</script>

<style></style>
