<template>
  <v-form ref="form" method="POST" action="/matchmaking/contract">
    <slot></slot>

    <v-text-field
      v-model="producer"
      name="producer"
      label="Producer"
      required
    ></v-text-field>

    <v-text-field
      v-model="buyer"
      name="buyer"
      label="Buyer"
      required
    ></v-text-field>

    <v-text-field
      v-model="fixed_cost"
      name="fixed_cost"
      label="Fixed Cost"
      required
    ></v-text-field>

    <v-btn color="success" class="mr-4" type="submit">
      Generate Contract
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      producer: "",
      buyer: "",
      fixed_cost: 0
    }),

    methods: {
      
    },
  }
</script>