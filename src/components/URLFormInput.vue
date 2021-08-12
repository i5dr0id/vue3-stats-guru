<template>
  <div class="input__url__container">
    <div class="input__button__wrapper">
      <input type="text" v-model="url" placeholder="URL" />
      <button @click="fetchJSONData" :disabled="loading">
        <span v-if="!loading">FETCH</span>
        <span v-else>Loading...</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "URLFormInput",
  emits: ["fetch-jsondata"],

  setup(_, { emit }) {
    // https://raw.githubusercontent.com/i5dr0id/temp-json-server/main/db.json
    const url = ref("");
    const loading = ref(false);

    const fetchJSONData = async () => {
      if (url.value) {
        loading.value = true;
        await fetch(url.value)
          .then((response) => response.json())
          .then((data) => {
            emit("fetch-jsondata", data);
          })
          .catch((err) => {
            alert(err.message);
            emit("fetch-jsondata", null);
          });
        loading.value = false;
      } else {
        alert("input URL to json data");
      }
    };

    return { url, fetchJSONData, loading };
  },
});
</script>

<style scoped>
.input__url__container {
  display: flex;
  align-items: center;
}
.input__button__wrapper {
  display: flex;
  align-items: center;
}
.input__button__wrapper > input {
  width: 200px;
  padding: 1em;
  border: 1px solid #aeb3c4;
  border-right: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.input__button__wrapper > button {
  width: 100px;
  background: #032672;
  color: #ffffff;
  border: 0;
  padding: 1em;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: none;
  height: 100%;
  cursor: pointer;
}
</style>
