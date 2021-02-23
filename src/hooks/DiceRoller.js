import { ref, readonly } from 'vue';

const rollIt = ref(false);

export default function DiceRoller() {
  function setRollIt(value = true) {
    rollIt.value = value;
  }

  return { rollIt:readonly(rollIt), setRollIt }
}