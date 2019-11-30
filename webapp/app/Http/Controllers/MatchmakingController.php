<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MatchmakingController extends Controller
{
    public function index()
    {
        return view('matchmaking');
    }
}
