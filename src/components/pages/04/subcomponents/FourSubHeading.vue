<template>
  <div class="columns sub-heading">
    <div class="column is-4 is-offset-4">
      <h4 class="title is-4">
        <slot default/>
      </h4>
    </div>
    <div class="column is-4">
      <h4 class="title is-4">
        <slot name="right"/>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourSubHeading',
};
</script>

<style>
</style>
