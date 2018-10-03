<template>
<div>
  <av-line ref="avLine"
           line-color="gray"
           v-bind:audio-src="audioSrc" />
  <p v-for="blackbird in blackbirds"
     v-bind:key="blackbird">
    {{ blackbird }}
  </p>
</div>
</template>

<script>
import moment from 'moment';
import audioSrc from '@/assets/audio/blackbird.mp3';

export default {
  name: 'PageEleven',
  data() {
    return {
      audioSrc,
      blackbirds: [],
      now: null,
    };
  },
  computed: {
    nowFormatted() {
      return moment(this.now).format('dddd, MMMM Do, YYYY [at] h:mm:ss a');
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.avLine.audio.addEventListener('play', () => { this.addBlackbird('started'); });
      this.$refs.avLine.audio.addEventListener('pause', () => { this.addBlackbird('stopped'); });
    });
  },
  methods: {
    addBlackbird(startedOrStopped) {
      this.now = new Date();
      this.blackbirds.push(`A blackbird ${startedOrStopped} whistling on ${this.nowFormatted}.`);
    },
  },
};
</script>

<style>
</style>
