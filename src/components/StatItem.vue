<template>
  <div class="stat__item">
    <div class="stat__circle">
      <div class="stat__figure">{{ figure }}</div>
    </div>
    <div class="stat__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    figure: {
      type: String,
      required: true,
      default: "nill",
    },
  },
};
</script>

<style scoped>
.stat__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat__circle {
  width: 100px;
  height: 100px;
  background: #ffffff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
}

.stat__figure {
  color: #042474;
}

.stat__title {
  margin-top: 1em;
  color: #ffffff;
  text-transform: uppercase;
}

/* MEDIA QUERY */
@media (max-width: 550px) {
  .stat__item {
    margin-bottom: 1em;
  }
}
</style>
