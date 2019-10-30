<template>
<div class="columns">
  <div class="column is-6">
    <div class="img-background">
      <div class="img-wrapper"
           v-bind:class="imgColor">
        <img src="@/assets/img/blackbird.png"
             alt="blackbird" />
      </div>
    </div>
  </div>
  <div class="column is-3">
    <div class="button-wrapper"
         v-for="color in colors"
         v-bind:key="color.name">
      <button class="button"
         v-bind:class="`is-${color.name}`"
         v-on:click="changeColor(color.name)">
         {{ `${color.display} light` }}
      </button>
    </div>
  </div>
  <div class="column is-3 button-wrapper has-text-centered">
    <h5 class="title is-5">
      It was
    </h5>
    <div class="button-wrapper">
      <button class="button"
         v-on:click="toggleFaded"
         :disabled="!fadedIsActive">
         Afternoon
      </button>
    </div>
    <div class="button-wrapper">
      <button class="button"
         v-on:click="toggleFaded"
         :disabled="fadedIsActive">
         Evening
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PageFive',
  data() {
    return {
      colors: [
        {
          name: 'success',
          display: 'green',
        },
        {
          name: 'info',
          display: 'blue',
        },
        {
          name: 'danger',
          display: 'red',
        },
        {
          name: 'warning',
          display: 'golden',
        },
      ],
      activeColorName: 'success',
      fadedIsActive: false,
    };
  },
  computed: {
    imgColor() {
      const classes = {
        faded: this.fadedIsActive,
      };

      classes[`has-background-${this.activeColorName}`] = true;

      return classes;
    },
    fadedButtonDisplay() {
      return this.fadedIsActive ? 'Evening' : 'Afternoon';
    },
  },
  methods: {
    changeColor(name) {
      this.activeColorName = name;
    },
    toggleFaded() {
      this.fadedIsActive = !this.fadedIsActive;
    },
  },
};
</script>

<style scoped>
h5 {
  margin-top: 3px;
}

.button-wrapper {
  margin: 0 0 0.5rem 0;
}

.button {
  border-radius: 10px;
}

.img-background {
  background-color: gray;
}

.img-wrapper {
  padding: 0.7rem;
}

.faded {
  opacity: 0.4;
}
</style>
