<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    // this will not work
    // someOtherProp = 'Overwritten value'

    return {
      // this appears that it's overwriting the value,
      // but we're just introducing the new variable with same name,
      // which takes precedence over the global one
      someOtherProp: 'Overwritten value'
    }
  }
})
</script>
<template>
  <div>
    Testing overwrite:<br />
    1. name: {{ name }}<br />
    2. someOtherProp: {{ someOtherProp }}<br />
    3. someBoolean: {{ someBoolean }}
  </div>
</template>
