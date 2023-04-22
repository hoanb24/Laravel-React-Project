<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SumController extends Controller
{
    public function index()
    {
        return view('tinh');
    }

    public function calculate(Request $request)
    {
        $number1 = $request->input('number1');
        $number2 = $request->input('number2');
        $sum = $number1 + $number2;
        return view('tinh', ['sum' => $sum]);
    }
}
