<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlantConsumptionController extends Controller
{
    public function index()
    {
        return view('plant-consumption');
    }
}
