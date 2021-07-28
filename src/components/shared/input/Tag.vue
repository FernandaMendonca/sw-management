<template>
    <transition name="tag-fade" />
    <span class="tag" v-show="show"> {{ titulo }}
    <span @click="show = !show" class="remove">X</span></span>
</template>

<script>
export default {
  props: ['titulo'],
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.tag {
  background-color: #2980b938;
  border-radius: 20px;
  color: #3f3f3f;
  font-size: 12px;
  font-weight: 800;
  margin: 3px;
  padding: 5px;
  & .remove {
    color: #202020;
    cursor: pointer;
    font-size: 10px;
  }

}

.tag-fade-enter,
.tag-fade-leave-active {
  opacity: 0;
}

.tag-fade-fade-enter-active,
.tag-fade-leave-active {
  transition: opacity 2s;
}

</style>
