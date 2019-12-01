<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PDF;

class MatchmakingController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index()
    {
        return view('matchmaking');
    }

    /**
     * Generate new contract
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function generateContract(Request $request)
    {
        $producer = $request->input('producer');
        $buyer = $request->input('buyer');
        $fixed_cost = $request->input('fixed_cost');

        $pdf = PDF::loadView('pdf.contract', [
            'producer_name' => $producer,
            'company_name' => $buyer,
            'fixed_price' => $fixed_cost,
        ]);

        return $pdf->download('contract.pdf');
    }
}
