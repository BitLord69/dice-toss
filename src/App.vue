<template>
  <img
    src="./assets/dice-target.png"
    alt="dice target"
    class="die-face die-rotate"
  />

  <h1>Dice roller</h1>
  <div>
    <span>Select number of dice to roll: </span>
    <select v-model="numDice" :disabled="rollIt">
      <option v-for="n in 5" :value="n" :key="n">{{ n }}</option>
    </select>
  </div>

  <div class="rolled-text">
    You have selected {{ words[numDice - 1] }}
    {{ numDice === 1 ? "die" : "dice" }}.
  </div>

  <div class="dice-container">
    <Die v-for="n in numDice" :key="n" :dieNum="n" />
  </div>

  <div>
    <button v-if="rollIt" type="button" @click="setRollIt(false)">Reset</button>
    <button v-else type="button" @click="setRollIt()">Click to roll</button>
  </div>
</template>

<script>
import { ref } from "vue";
import Die from "./components/Die.vue";
import DiceRoller from "@/hooks/DiceRoller";

export default {
  name: "App",
  components: {
    Die,
  },

  setup() {
    const numDice = ref(1);
    const { rollIt, setRollIt } = DiceRoller();
    const words = ["one", "two", "three", "four", "five"];

    return { numDice, words, rollIt, setRollIt };
  },
};
</script>

<style lang='scss'>
$text-color: #140cf6;

body {
  margin-top: 30px;
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  overflow-x: hidden;
  font-size: 1.5rem;
  color: $text-color;
  background: #a3b5c7;
}

div {
  margin: 5px 0;
}

.rolled-text {
  margin: 10px 0;
}

.die-face {
  width: 125px;
  height: 125px;
}

.dice-container {
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
}

select {
  color: inherit;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 2px 2px;
  border-radius: 5px;
  border-color: inherit;

  &:hover {
    background: lighten($text-color, 45%);
  }

  &:focus {
    border-color: inherit;
  }
}

button {
  color: inherit;
  cursor: pointer;
  margin: 10px;
  padding: 10px 10px;
  border-radius: 5px;
  font-size: inherit;
  background: lighten($text-color, 30%);
  transition: ease-in-out, size 0.25s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background: lighten($text-color, 25%);
  }
}

.die-rotate {
  animation: spin 8s linear infinite;
}

@keyframes spin {
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}
</style>
