<template>
  <div class="commute">
    <h2>
    {{ person.fields.firstname }} {{ person.fields.lastname }}'s commute
    </h2>
    <p>
    This is <span class="person">{{ person.fields.firstname }}</span>
    </p>
    <img :src="person.fields.photo.fields.file.url" />

    <p>{{ person.fields.firstname }} commutes from {{ start.fields.name }}</p>

    <img :src="start.fields.photo.fields.file.url" />
    <p>to {{ destination.fields.name }}</p>
    <img :src="destination.fields.photo.fields.file.url" />
  </div>
</template>

<script>
export default {
  name: "Commute",
  props: {
    person: Object,
    start: Object,
    destination: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.person {
  color: rgb(103, 189, 189);
  font-weight: bold;
}

img {
  max-width: 600px;
}
</style>
