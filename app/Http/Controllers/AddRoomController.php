<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddRequest;
use App\Models\Room;
use Illuminate\Http\Request;

class AddRoomController extends Controller
{
    public function index() {
        $rooms = Room::all();
        return view('add', compact('rooms'));
    }
    public function store(AddRequest $request)
{
    $room = Room::create([
        'room_name' => $request->input('roomname'),
        'description' => $request->input('des'),
        'price' => $request->input('price'),
        'image' => $request->input('img')
    ]);
    $rooms = Room::all();
    return view('add', compact('rooms'));
}

}
