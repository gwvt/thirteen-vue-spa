<template>
<div class="columns">
  <div class="column is-6">
    <div class="img-background">
      <div class="img-wrapper"
           v-bind:class="imgColorClassObj"> <!-- ∆10 -->
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
         v-on:click="changeImgColorName(color.name)">
         {{ `${color.display} light` }}
      </button> <!-- ∆7, ∆8 -->
    </div>
  </div>
  <div class="column is-3 button-wrapper has-text-centered">
    <h5 class="title is-5">
      It was
    </h5>
    <div class="button-wrapper">
      <button class="button"
         v-on:click="toggleFaded"
         :disabled="!faded">
         Afternoon
      </button> <!-- ∆9 -->
    </div>
    <div class="button-wrapper">
      <button class="button"
         v-on:click="toggleFaded"
         :disabled="faded">
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
      colors: [ // ∆3
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
      imgColorName: 'success', // ∆4
      faded: false, // ∆5
    };
  },
  computed: {
    imgColorClassObj() { // ∆11
      const classObj = {
        faded: this.faded,
      };

      classObj[`has-background-${this.imgColorName}`] = true;

      return classObj;
    },
  },
  methods: { // ∆6
    changeImgColorName(name) {
      this.imgColorName = name;
    },
    toggleFaded() {
      this.faded = !this.faded;
    },
  },
};
</script>

<style scoped> /* ∆1 */
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

.faded { /* ∆2 */
  opacity: 0.4;
}
</style>
