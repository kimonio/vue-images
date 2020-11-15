<template>
  <div>
    <div class="ui secondary pointing menu">
      <a href="/" class="active item">
        Vue Images
      </a>
      <div class="right menu">
        <a class="item">
          Gallery
        </a>
        <a class="item" @click="increment">
          Upload
        </a>
        <a class="item">
          Logout
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    }
  }
};
</script>

<style></style>
