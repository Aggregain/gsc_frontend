<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  props:{
    color:{
      type: String,
      default: '#8E9DAF'
    }
  }
}
</script>
