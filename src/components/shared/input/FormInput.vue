<template>
    <label :for="id"> {{ label }}
        <input
          :type="tipo"
          :id="id"
          :placeholder="rotulo"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="value"/>
    </label>
</template>

<script>
export default {
  props: ['label', 'id', 'tipo', 'rotulo', 'modelValue'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>

label {
  color: #202020;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 1rem;
  width: 30%;
}

input {
  background: #bebebe38;
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9rem;
  height: 2.5rem;
  outline: none;
  padding: 10px;
  text-align: left;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
