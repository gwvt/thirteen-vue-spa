<template>
  <div>
    <template v-for="video in videos">
      <twelve-video-section v-bind="video" />
    </template>
  </div>
</template>

<script>
import TwelveVideoSection from './subcomponents/TwelveVideoSection.vue';
import  createVueProject from '@/assets/video/create-vue-project.mp4';
import vueAddPlugin from '@/assets/video/vue-add-plugin.mp4';
import vueGui from '@/assets/video/vue-gui.mp4';

export default {
  name: 'PageTwelve',
  components: {
    TwelveVideoSection,
  },
  data() {
    return {
      videos: [
        {
          heading: 'Select options with vue-cli',
          videoPath: createVueProject,
        },
        {
          heading: 'Add a plugin later on',
          videoPath: vueAddPlugin,
        },
        {
          heading: 'Use the vue-cli GUI',
          videoPath: vueGui,
        },
      ]
    };
  },
};
</script>

<style>
</style>
