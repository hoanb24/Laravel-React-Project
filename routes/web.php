<?php

use App\Http\Controllers\SumController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('tinh');
});


// // Route::get('/',[PageController::class,'getIndex']);

// // Route::get('/',[PageController::class,'getIndex'])->name('add-pro');


// Route::get('/welcome',function(){
//     return "Chao mung cac ban den voi PNV";
// });


// Route::get('hello',[App\Http\Controllers\HelloControl::class,'xinchao']);


// Route::get('tinh',[App\Http\Controllers\SumController::class,'tinhtong']);

// Route::post('sum',function(){
//     return view('tinh');
// });
Route::get('/calculate', [SumController::class,'index']);
Route::post('/calculate', [SumController::class, 'calculate']);


Route::get('/area',[App\Http\Controllers\AreaofshapeController::class,'computeArea']);
Route::post('/area',[App\Http\Controllers\AreaofshapeController::class,'computeArea']);
