<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33301 14.1668H8.33301M3.33301 10.0002H10.833M14.9997 9.16683V15.8335M14.9997 15.8335L17.4997 13.3335M14.9997 15.8335L12.4997 13.3335M3.33301 5.8335H13.333" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  props:{
    color:{
      type: String,
      default: '#1A73E8'
    }
  }
}
</script>
