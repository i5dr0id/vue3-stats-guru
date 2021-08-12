import { reactive, toRefs } from 'vue';

const state = reactive({
  counter: 0,
});

export default () => {
  const increment = (amount = 1) => {
    state.counter += amount;
  };

  return {
    state: toRefs(state),
    increment,
  };
};