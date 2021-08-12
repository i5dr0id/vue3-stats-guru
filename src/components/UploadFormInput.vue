<template>
  <div class="input__upload__container">
    <div class="input__file__upload">
      <label class="filebutton">
        <div class="label__content">
          <img alt="upload icon" width="15" height="15" src="../assets/upload_icon.png" />
          <p>UPLOAD</p>
        </div>
        <input
          :key="count"
          type="file"
          accept=".json"
          ref="file"
          name="myfile"
          @change="emitFileChange"
        />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UploadFormInput",
  emits: ["upload-jsondata"],

  setup(_, { emit }) {
    const file = ref(null);
    const count = ref(0);

    const emitFileChange = async () => {
      if (file.value && file.value.files.length > 0) {
        let reader = new FileReader();
        reader.onload = () => {
          const data = JSON.parse(reader.result);
          emit("upload-jsondata", data);
          ++count.value;
        };
        reader.readAsText(file.value.files[0]);
      } else {
        emit("upload-jsondata", null);
      }
    };
    return { file, emitFileChange, count };
  },
});
</script>

<style scoped>
.input__upload__container {
  width: 35%;
  padding: 1em 0;
  border-right: 1px solid #dbdee3;
}

.input__file__upload {
  width: 110px;
  overflow: hidden;
  position: relative;
}

.input__file__upload > label {
  cursor: pointer;
  width: 100%;
  background: #032672;
  border-radius: 10px;
}

.input__file__upload > label > .label__content {
  display: flex;
  align-items: center;
  background: #032672;
  border-radius: 10px;
}

.input__file__upload > label > .label__content > img {
  margin: 0 0.5em;
}

.input__file__upload > label > .label__content > p {
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
}

.input__file__upload > label > input {
  visibility: hidden;
  position: absolute;
  width: 100%;
}
/* MEDIA QUERY */
@media (max-width: 550px) {
  .input__upload__container {
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
