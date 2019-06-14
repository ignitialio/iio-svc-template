<template>
  <div :id="id" class="iiost-layout">
  </div>
</template>

<script>
export default {
  props: [ ],
  data: () => {
    return {
      id: 'iiost_' + Math.random().toString(36).slice(2)
    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {

  },
  beforeDestroy() {

  }
}
</script>

<style>
  .iiost-layout {
    width: 100%;
    height: 100%;
  }
</style>
