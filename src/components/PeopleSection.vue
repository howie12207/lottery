<template>
  <div>
    <Card
      :icon="sectionData.icon"
      :title="sectionData.title"
      :placeholder="sectionData.placeholder"
      :remark="sectionData.remark.value"
      v-model:content="sectionData.key.value"
    >
      <template #subTitle>
        <button
          class="
            bg-green-100
            py-1
            px-4
            ml-4
            rounded-sm
            shadow-sm
            text-sm
            hover:bg-green-300
            transition
          "
          @click="createPeopleList"
        >
          產生名單編號
        </button>
      </template>
    </Card>
    <div class="flex justify-evenly mt-2">
      <Button
        content="試抽"
        custom="bg-green-400 hover:bg-green-500"
        @clickHandle="draw"
      />
      <Button
        content="抽獎"
        custom="bg-green-400 hover:bg-green-500"
        @clickHandle="draw(false)"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

import Card from "./Card.vue";
import Button from "./Button.vue";

const props = defineProps({
  sectionData: {
    type: Object,
    default: () => ({}),
  },
  titleContent: {
    type: String,
    default: "",
  },
  prizeContent: {
    type: String,
    default: "",
  },
  peopleContent: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["createPeopleList", "draw", "updateRemark"]);

const createPeopleList = () => {
  const input = window.prompt("請輸入抽獎人數", 10);
  if (input === null) return;
  const people = Number(input);
  const reg = /^[0-9]*[1-9][0-9]*$/;
  if (!reg.test(people)) {
    window.alert("請輸入正確數字");
    return;
  } else {
    let list = "";
    for (let i = 1; i <= people; i++) {
      list = list + i + "\n";
    }
    emit("createPeopleList", list);
  }
};

const draw = (isTest = true) => {
  if (!verify()) return;
  const { titleContent, prizeContent, peopleContent } = props;

  // 將獎項轉成陣列並去除空白
  const prizeToAry = prizeContent?.split("\n")?.filter((item) => item.trim());
  // 將各獎項數量切成陣列
  const prizeAmt = prizeToAry.map((prize) => Number(prize.split(",")[1]) || 1);
  // 將各獎項名稱切成陣列
  const prizeList = prizeToAry.map((prize) => prize.split(",")[0]);
  // 統計總獎項數量
  const totalPrizeAmt = prizeAmt.reduce((prev, next) => prev + next, 0);

  // 將名單轉成陣列並去除空白
  const listToAry = peopleContent?.split("\n")?.filter((item) => item.trim());
  // 待抽名單總人數
  const totalList = listToAry.length;

  if (totalPrizeAmt > totalList) {
    window.alert("獎項數目超過待抽人數，請重新填寫");
    return;
  }

  emit("draw", "抽獎中，請稍後");

  const prizeRemark = `預計抽出${prizeAmt.length}個獎項，共${totalPrizeAmt}個名額`;
  const peopleRemark = `共有${totalList}個人參與`;

  emit("updateRemark", { prizeRemark, peopleRemark });

  const test = isTest ? " (測試中)" : "";

  let result = `【${titleContent}】${test}\n=============================\n`;
  prizeList.forEach((item, index) => {
    result = `${result}${item}：\n`;
    for (let i = 0; i < prizeAmt[index]; i++) {
      const total = listToAry.length;
      const randomIndex = getRandom(total);
      result = `${result}${listToAry[randomIndex]}${test}\n`;
      listToAry.splice(randomIndex, 1);
    }
    result = `${result}\n`;
  });

  setTimeout(() => {
    emit("draw", result);
    emit("updateRemark", { prizeRemark, peopleRemark });
  }, 1500);
};

const verify = () => {
  const { titleContent, prizeContent, peopleContent } = props;
  const verify = {
    title: {
      isValid: !!titleContent.trim(),
      message: "請輸入抽獎主題",
    },
    prize: {
      isValid: !!prizeContent.trim(),
      message: "請輸入獎項設定",
    },
    list: {
      isValid: !!peopleContent.trim(),
      message: "請輸入待抽名單",
    },
  };
  for (const item of Object.keys(verify)) {
    if (!verify[item].isValid) {
      window.alert(verify[item].message);
      return false;
    }
  }
  return true;
};

const getRandom = (max) => Math.floor(Math.random() * max);
</script>
