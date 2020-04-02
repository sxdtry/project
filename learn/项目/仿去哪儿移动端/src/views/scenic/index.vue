<template>
  <div class="s-scenic">
      <s-header :num="id" />
      <s-body :num="id" />
      <s-chat :num="id" />
  </div>
</template>

<script>
import sHeader from "@/components/scenic/header.vue";
import sBody from "@/components/scenic/body.vue";
import sChat from "@/components/scenic/chat.vue";
export default {
  name: "s-scenic",
  data() {
    return {
      id: null
    };
  },
  components: {
    sHeader,
    sBody,
    sChat
  },
  created() {
    this.id = this.$route.params.id;
  }
};
</script>

<style lang="less" scoped>
</style>