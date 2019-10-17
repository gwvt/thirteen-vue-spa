<template> <!-- ∆1 -->
<p>
  {{ phrase }} <!-- ∆3 -->
</p>
</template>

<script>
export default {
  name: 'PageOne',
  data() { // ∆2
    return {
      phrase: 'a blackbird',
    };
  },
};
</script>

<style>
</style>
