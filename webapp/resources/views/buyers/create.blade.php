@extends('layouts.app')

@section('content')
<app>
  <v-container grid list-md>
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="accent-text">{{ __('New Buyer') }}</h1>
      </v-flex>

      <v-flex xs12>
        <buyer></buyer>
      </v-flex>
    </v-layout>
  </v-container>
</app>
@endsection
