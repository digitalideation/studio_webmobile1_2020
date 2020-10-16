<template>
  <div class="commute">
    <h2>
      {{person}}'s commute
    </h2>
    <p>
      This is <span class="person">{{person}}</span>
    </p>
    <p>
      {{person}} commutes from {{start}} to {{destination}}
    </p>
  </div>
</template>

<script>
export default {
  name: "Commute",
  props: {
    person: String,
    start: String,
    destination: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.person {
  color: rgb(103, 189, 189);
  font-weight: bold;;
}

</style>
