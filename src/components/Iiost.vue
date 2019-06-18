<template>
  <div :id="id" class="iiost-layout">
    {{ $t('Insert here your own UI components') }}
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
    height: calc(100% - 0px);
  }
</style>
