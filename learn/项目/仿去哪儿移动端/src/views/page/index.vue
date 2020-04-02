<template>
  <div claas="s-page">
      <s-header />
      <s-body />
  </div>
</template>

<script>
import sHeader from "@/components/page/header";
import sBody from "@/components/page/body";
export default {
  name: "s-page",
  components: {
    sHeader,
    sBody
  },
};
</script>