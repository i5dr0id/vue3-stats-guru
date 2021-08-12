<template>
  <UploadFormInput :key="counter" @upload-jsondata="handleDatafromFile" />
  <URLFormInput :key="counter" @fetch-jsondata="handleDatafromURL" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import useCounter from "@/composables/store";

import UploadFormInput from "@/components/UploadFormInput";
import URLFormInput from "@/components/URLFormInput";

export default defineComponent({
  name: "DatasetForm",
  emits: ["form-data"],

  components: {
    UploadFormInput,
    URLFormInput,
  },

  setup(_, { emit }) {
    const { state } = useCounter();

    const jsonData = ref(null);
    const jsonFile = ref(null);

    const handleDatafromURL = (urlData) => {
      formatData(urlData);
    };

    const handleDatafromFile = (fileData) => {
      formatData(fileData);
    };

    const formatData = (rawData) => {
      if (rawData) {
        const { data } = rawData;
        if (data && Array.isArray(data) && data.length) {
          emit("form-data", data);
        }
      } else {
        alert("invalid data");
      }
    };

    return {
      jsonData,
      jsonFile,
      handleDatafromURL,
      handleDatafromFile,
      formatData,
      ...state,
    };
  },
});
</script>
