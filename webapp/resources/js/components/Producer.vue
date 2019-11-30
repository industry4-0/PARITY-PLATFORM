<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Project Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Technology"
      required
    ></v-select>

    <v-row>
      <v-col cols="4">
        <v-subheader>Capcity</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          v-model="capacity"
          label=""
          value="1.00"
          suffix="MW"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Anual Expected Production</v-subheader>
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
      <v-col cols="4">
        <v-subheader><p>Location</p></v-subheader>
      </v-col>
      <v-col cols="8">
        <v-overflow-btn
          class="my-2"
          :items="locations"
          label="Locations"
          target="#dropdown-example"
        ></v-overflow-btn>
      </v-col>
    </v-row>

  <v-text-field
      v-model="company"
      :counter="10"
      :rules="nameRules"
      label="Management Company"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Solar',
        'Wind',
      ],
      capacity: '',
      anexp: '',
      locations: ['Αττική', 'Στερεά Ελλάδα', 'Πελλοπόνησος', 'Μακεδονία'],
      checkbox: false,
      company: '',
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          axios.post('/producers', {
          'name': this.name,
          'email': this.email,
          'select': this.select,
          'capacity': this.capacity,
          'anexp': this.anexp,
          'locations': this.locations,
          'checkbox': this.checkbox,
          'company': this.company
        }).then(res => {
          console.log(res.data)
          location.reload();
        })

          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>