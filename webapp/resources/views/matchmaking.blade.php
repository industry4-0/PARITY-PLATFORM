@extends('layouts.app')

@section('content')
<app>
  <v-container grid list-md>
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="accent-text">{{ __('Matchmaking') }}</h1>
      </v-flex>

      <v-flex xs12>
        <matchmaking>
          @csrf
        </matchmaking>
      </v-flex>
    </v-layout>
  </v-container>
</app>
@endsection
