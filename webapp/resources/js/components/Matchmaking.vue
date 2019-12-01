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

     <v-row>
        <v-col cols="4">
          <v-subheader>Anual Expected Demand</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-model="anexp"
            label=""
            value="1.00"
            suffix="MWh"
          ></v-text-field>
        </v-col>
      </v-row>


    <v-row>
    <v-col cols="12" sm="6">
      <v-date-picker v-model="dates" range></v-date-picker>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field v-model="dateRangeText" label="Date range" prepend-icon="event" readonly></v-text-field>
      model: {{ dates }}
    </v-col>
  </v-row>



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
      fixed_cost: 0,
      anexp: '',
      dates: ['2019-09-10', '2019-09-20'],
      
    }),

    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },

    methods: {
      
    },
  }
</script>