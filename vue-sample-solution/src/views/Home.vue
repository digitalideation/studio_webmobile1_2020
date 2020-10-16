<template>
  <div class="home">
    <li v-for="commute in commutes" :key="commute.person">
      <Commute :person="commute.person" :start="commute.start" :destination="commute.destination" />
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
import Commute from "@/components/Commute.vue";

export default {
  name: "Home",
  components: {
    Commute
  },
  data: function() {
    return {
      commutes: [
        {
          person: "Maria",
          start: "Baar",
          destination: "Emmenbrücke"
        },
        {
          person: "Hanna",
          start: "Zürich",
          destination: "Emmenbrücke"
        }
      ]
    };
  }
};
</script>
