<?php

namespace App\Http\Controllers;

use App\Producer;
use Illuminate\Http\Request;

class ProducerController extends Controller
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
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('producers.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_id = User::where('email', $request->input('email'))
            ->select('id')
            ->first()
            ->id;

        $producer = Producer::Create([
            'project_name' => $request->input('project_name'),
            'user_id' => $user_id,
            'technology' => strtolower($request->input('technology')),
            'capacity' => $request->input('capacity'),
            'anual_expect_prod' => $request->input('anexp'),
            'location' => $request->input('location'),
            'management_company' => $request->input('company'),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Producer  $producer
     * @return \Illuminate\Http\Response
     */
    public function show(Producer $producer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Producer  $producer
     * @return \Illuminate\Http\Response
     */
    public function edit(Producer $producer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Producer  $producer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Producer $producer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Producer  $producer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Producer $producer)
    {
        //
    }
}
