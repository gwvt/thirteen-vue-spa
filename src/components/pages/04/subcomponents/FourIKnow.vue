<template>
<div>
  <four-sub-heading>
    I know
  </four-sub-heading>
  <div class="columns">
    <div class="column is-2">
      <a class="button"
         v-on:click="addWhatIKnow">
        what
      </a>
    </div>
    <div class="column is-6 is-offset-2">
      <p>
        {{ whatIKnow }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import FourSubHeading from './FourSubHeading.vue';

export default {
  name: 'IKnow',
  components: {
    FourSubHeading,
  },
  data() {
    return {
      whatIKnow: '', // ∆1
    };
  },
  methods: {
    addWhatIKnow() {
      let phrase = '';
      if (this.whatIKnow) {
        phrase += ' and';
        const toggle = Math.floor(Math.random() * 3);
        if (toggle === 0) {
          phrase += ' noble accents';
        } else if (toggle === 1) {
          phrase += ' lucid, inescapable rhythms';
        } else {
          phrase += ' that the blackbird is involved';
        }
      } else {
        phrase += ' noble accents';
      }
      this.whatIKnow += phrase;
    },
  },
};
</script>

<style>

</style>
