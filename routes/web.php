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

// Route::get('/', function () {
//     return view('tinh');
// });


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
// Route::get('/calculate', [SumController::class,'index']);
// Route::post('/calculate', [SumController::class, 'calculate']);


// Route::get('/area',[App\Http\Controllers\AreaofshapeController::class,'computeArea']);
// Route::post('/area',[App\Http\Controllers\AreaofshapeController::class,'computeArea']);


// use GuzzleHttp\Client;

// Route::get('/covid-data', function () {
//     // Khởi tạo một instance của Guzzle client
//     $client = new Client();

//     // Gửi request GET đến API và nhận response
//     $response = $client->request('GET','https://api.covid19api.com/summary');

//     // Parse response body
//     $data = json_decode($response->getBody(), true);

//     // Truyền dữ liệu vào view và hiển thị
//     return view('covid-data', ['data' => $data]);
// });



Route::get('/form', [App\Http\Controllers\FormRequestController::class, 'index']);
Route::post('/form', [App\Http\Controllers\FormRequestController::class, 'validateform']);



Route::get('/add', [App\Http\Controllers\AddRoomController::class, 'index']);
Route::post('/add', [App\Http\Controllers\AddRoomController::class, 'store'])->name('add.store');


Route::get('/master', [App\Http\Controllers\PageController::class, 'getIndex']);


Route::get('loai-san-pham',[App\Http\Controllers\PageController::class, 'getLoaiSp']);

Route::get('chi-tiet-san-pham',[App\Http\Controllers\PageController::class, 'getChitiet']);
Route::get('lien_he',[App\Http\Controllers\PageController::class, 'getLienhe']);

Route::get('gioi_thieu', [App\Http\Controllers\PageController::class, 'getAbout']);
