<template>
  <div class="die-wrapper">
    <h3>I am die #{{ dieNum }}!</h3>
    <img
      v-if="rollIt"
      :src="'die-' + dieFace + '.png'"
      alt="dice target"
      class="die-face"
    />
    <img
      v-else
      src="./../assets/dice-target.png"
      alt="dice target"
      class="die-face"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import DiceRoller from "@/hooks/DiceRoller";

export default {
  name: "Die",
  props: {
    dieNum: Number,
  },

  setup(props) {
    const { rollIt } = DiceRoller();
    const dieFace = ref(props.dieNum);

    watch(rollIt, () => {
      if (rollIt.value) {
        const audio = new Audio(require("@/assets/dice-shake.mp3"));
        audio.play();
        let timerId = setInterval(() => {
          dieFace.value = Math.floor(1 + Math.random() * 6);
        }, 150);

        setTimeout(() => {
          clearInterval(timerId);
        }, Math.floor(2500 + Math.random() * 500));
      }
    });

    return { rollIt, dieFace };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.die-wrapper {
  width: 250px;
}

h3 {
  margin: 5px 0 8px 0;
}
</style>
