<template>
  <div class="dashboard__container">
    <div class="dashboard__header">
      <h1>STATS GURU</h1>
    </div>
    <div class="stats__wrapper">
      <div class="stats__item__wrapper">
        <StatItem title="Mean" :figure="meanData" />
        <StatItem title="Median" :figure="medianData" />
        <StatItem title="STD Deviation" :figure="stdDeviationData" />
        <StatItem title="Mode" :figure="modeData" />
      </div>
    </div>
    <div class="form__wrapper">
      <DatasetForm @form-data="computeStatsData" />
    </div>
    <div class="reset__button__wrapper">
      <button @click="resetHandler">RESET STATS</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useCounter from "@/composables/store";

import StatItem from "@/components/StatItem";
import DatasetForm from "@/components/DatasetForm";

import { mean, median, mode, stdDeviation } from "@/utils/statsGuruCalculator";

export default defineComponent({
  name: "StatGuruDashboard",

  components: {
    StatItem,
    DatasetForm,
  },

  setup(_, context) {
    const { state, increment } = useCounter();

    const meanData = ref("0");
    const medianData = ref("0");
    const modeData = ref("0");
    const stdDeviationData = ref("0");

    const computeStatsData = (formData) => {
      meanData.value = String(mean(formData));
      medianData.value = String(median(formData));
      modeData.value = String(mode(formData));
      stdDeviationData.value = String(stdDeviation(formData));
    };

    const resetHandler = () => {
      meanData.value = "0";
      medianData.value = "0";
      modeData.value = "0";
      stdDeviationData.value = "0";
      increment();
    };

    return {
      meanData,
      medianData,
      modeData,
      stdDeviationData,
      computeStatsData,
      resetHandler,
      ...state,
      increment,
    };
  },
});
</script>

<style scoped>
.dashboard__container {
  border: 5px solid #dbdee3;
  height: 100vh;
  overflow: scroll;
}

.dashboard__header > h1 {
  color: #002772;
  padding: 0 0.5em;
}

.stats__wrapper {
  padding: 0 1em;
  background: #032672;
}

.stats__item__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5em;
  padding-bottom: 2em;
}

.form__wrapper {
  margin-top: 1em;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
}

.reset__button__wrapper {
  margin-top: 4em;
  display: flex;
  justify-content: center;
}

.reset__button__wrapper > button {
  background: red;
  padding: 0.5em 1em;
  border: none;
  color: #ffffff;
  cursor: pointer;
}

/* MEDIA QUERY */
@media (max-width: 550px) {
  .dashboard__container {
    height: 100%;
    padding: 1em 0;
  }
  .form__wrapper {
    flex-flow: column;
    align-items: center;
  }
  .stats__item__wrapper {
    flex-flow: column;
  }
}
</style>

<style>
body {
  font-family: system-ui;
  margin: 0;
}

#app {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}
</style>
