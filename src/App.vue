<template>
  <h1 class="bg-green-500 text-center p-4 text-4xl font-black text-white mb-4">
    簡易抽獎工具
  </h1>

  <section class="md:grid grid-cols-2 grid-rows-2 gap-4 p-8">
    <TitleSection :sectionData="titleData" class="mb-4 md:mb-0" />
    <PrizeSection :sectionData="prizeData" class="mb-4 md:mb-0" />
    <PeopleSection
      class="mb-4 md:mb-0"
      :sectionData="peopleData"
      :titleContent="titleData.key.value"
      :prizeContent="prizeData.key.value"
      :peopleContent="peopleData.key.value"
      @createPeopleList="createPeopleList"
      @draw="draw"
      @updateRemark="updateRemark"
    />
    <ResultSection
      class="mb-4 md:mb-0"
      :sectionData="resultData"
      :titleContent="titleData.key.value"
    />
  </section>
  <div class="flex pb-8 justify-center">
    <Button
      content="產生範例"
      custom="bg-blue-400 hover:bg-blue-500 mr-16"
      @clickHandle="sample"
    />
    <Button
      content="全部清除"
      custom="bg-red-400 hover:bg-red-500"
      @clickHandle="clear"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

import TitleSection from "./components/TitleSection.vue";
import PrizeSection from "./components/PrizeSection.vue";
import PeopleSection from "./components/PeopleSection.vue";
import ResultSection from "./components/ResultSection.vue";
import Button from "./components/Button.vue";

const titleData = {
  icon: "message.svg",
  title: "標題",
  placeholder: "",
  key: ref(""),
};
const prizeData = {
  icon: "setting.svg",
  title: "獎項清單",
  placeholder:
    "說明：一行一獎項，可多種獎項。\n格式：獎品名稱,獎品數量(可省略，預設為1)，也可以指輸入數字(數量)",
  key: ref(""),
  remark: ref(""),
};
const peopleData = {
  key: "list",
  icon: "list.svg",
  title: "待抽獎人名單",
  placeholder: "",
  key: ref(""),
  remark: ref(""),
};
const resultData = {
  key: "result",
  icon: "star.svg",
  title: "中獎結果",
  placeholder: "",
  key: ref(""),
};

const sample = () => {
  titleData.key.value = "年末大抽獎，各式獎項等你來拿。";
  prizeData.key.value =
    "頭獎-跑車一台\n二獎-GOGORO一台\n三獎-現金三萬元\n小獎-現金三千,5\n";
  peopleData.key.value =
    "王先生\n陳小姐\n廖先生\n李小姐\n范小姐\n蘇先生\n陳先生\n張先生";
};

const updateRemark = ({
  prizeRemark = prizeRemark.remark.value,
  peopleRemark = peopleData.remark.value,
}) => {
  prizeData.remark.value = prizeRemark;
  peopleData.remark.value = peopleRemark;
};

const draw = (content) => {
  resultData.key.value = content;
};

const createPeopleList = (list) => {
  peopleData.key.value = list;
};

const clear = () => {
  titleData.key.value = "";
  prizeData.key.value = "";
  peopleData.key.value = "";
  resultData.key.value = "";
  prizeData.remark.value = "";
  peopleData.remark.value = "";
};
</script>
