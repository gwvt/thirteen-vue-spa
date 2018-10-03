<template>
  <div class="video-section" v-bind:key="videoPath">
    <h4 class="title is-4">
      {{ heading }}
    </h4>
    <video controls
           muted
           v-bind:src="videoPath"
           width="700">
    </video>
  </div>
</template>

<script>
export default {
  name: 'TwelveVideoSection',
  props: {
    heading: {
      type: String,
      required: true,
    },
    videoPath: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.video-section {
  margin-bottom: 3rem;
}
</style>
