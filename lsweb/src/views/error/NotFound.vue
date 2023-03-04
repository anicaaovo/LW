<!--所有的网页都被看做一个组件。放在components或者放在view里都是可以的。根据需求设计各个模块-->
<template>
    <ContentField>
      404 Not Found
    </ContentField>
</template>

<script>
import ContentField from "@/components/ContentField.vue"

export default {
  components: {
    ContentField
  }
}
</script>

<style scoped>

</style>