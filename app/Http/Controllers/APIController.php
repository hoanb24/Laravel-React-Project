<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Models\t_lazada;
use App\Models\Orders;

class APIController extends Controller
{

    public function addOrder(Request $request)
    {
        $order = new Orders();
        $order->name = $request->input('name');
        $order->image = $request->input('image');
        $order->price = intval($request->input('price'));
        $order->quantity = intval($request->input('quantity'));
        $order->id_user = intval($request->input('id_user'));
        $order->save();
        return $order;
    }
    public function getLazaP()
    {
        $lzp = t_lazada::all();
        return response()->json($lzp);
    }
    public function addP(Request $request)
    {
        $product = new t_lazada();
        $product->name = $request->input('name');
        $product->image = $request->input('image');
        $product->descrpition = $request->input('description');
        $product->unit_price = intval($request->input('unit_price'));
        $product->promotion_price = intval($request->input('promotion_price'));
        $product->unit = $request->input('unit');
        $product->new = intval($request->input('new'));
        $product->id_type = intval($request->input('id_type'));
        $product->save();
        return $product;
    }
    public function deleteP($id)
    {
        $pd = t_lazada::find($id);
        $fileName = 'source/image/product/' . $pd->image;
        if (File::exists($fileName)) {
            File::delete($fileName);
        }
        $pd->delete();
        return ['status' => 'ok', 'msg' => 'Delete successed'];
    }

    public function editP(Request $request, $id)
    {
        $product = t_lazada::find($id);

        $product->name = $request->input('name');
        $product->image = $request->input('image');
        $product->descrpition = $request->input('description');
        $product->unit_price = intval($request->input('unit_price'));
        $product->promotion_price = intval($request->input('promotion_price'));
        $product->unit = $request->input('unit');
        $product->new = intval($request->input('new'));
        $product->id_type = intval($request->input('id_type'));

        $product->save();
        return response()->json(['status' => 'ok', 'msg' => 'Edit successed']);
    }

    public function login(Request $request){
        $login = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];

        $checklogin = DB::table('users')->where('email', $request->input('email'))->where('password', $request->input('password'))->first();

        if ($checklogin) {
            // Tài khoản hợp lệ
            return response()->json([
                'mess' => true,
                'id' => $checklogin->id
            ]);
        }
        else {
            return response()->json([
                'mess' => false
            ]);
        }
        // else {
        // //     // Tài khoản không hợp lệ
        // //     return response()->json([
        // //         'Data' =>'<script>alert("Đăng nhập thất bại");window.location.assign("http://localhost:3000/signin")</script>'
        // //     ]);[
        //     //     'Data' =>'<script>alert("Đăng nhập thành công");window.location.href("http://localhost:3000/trangchu")</script>'
        //     // ]
        //     return response()->json( $checklogin);

        // }

    }




    // public function getProducts()
    // {
    //     $products = Product::all();
    //     return response()->json($products);
    // }

    // public function getOneProduct($id)
    // {
    //     $product = Product::find($id);
    //     return response()->json($product);
    // }
    // public function addProduct(Request $request)
    // {
    //     $product = new Product();
    //     $product->name = $request->input('name');
    //     $product->image = $request->input('image');
    //     $product->description = $request->input('description');
    //     $product->unit_price = intval($request->input('unit_price'));
    //     $product->promotion_price = intval($request->input('promotion_price'));
    //     $product->unit = $request->input('unit');
    //     $product->new = intval($request->input('new'));
    //     $product->id_type = intval($request->input('id_type'));
    //     $product->save();
    //     return $product;
    // }
    // public function deleteProduct($id)
    // {
    //     $product = Product::find($id);
    //     $fileName = 'source/image/product/' . $product->image;
    //     if (File::exists($fileName)) {
    //         File::delete($fileName);
    //     }
    //     $product->delete();
    //     return ['status' => 'ok', 'msg' => 'Delete successed'];
    // }
    // public function editProduct(Request $request, $id)
    // {
    //     $product = Product::find($id);

    //     $product->name = $request->input('name');
    //     $product->image = $request->input('image');
    //     $product->description = $request->input('description');
    //     $product->unit_price = intval($request->input('unit_price'));
    //     $product->promotion_price = intval($request->input('promotion_price'));
    //     $product->unit = $request->input('unit');
    //     $product->new = intval($request->input('new'));
    //     $product->id_type = intval($request->input('id_type'));

    //     $product->save();
    //     return response()->json(['status' => 'ok', 'msg' => 'Edit successed']);
    // }

    public function uploadImage(Request $request)
    {
        // process image
        if ($request->hasFile('uploadImage')) {
            $file = $request->file('uploadImage');
            $fileName = $file->getClientOriginalName();

            $file->move('source/image/product', $fileName);

            return response()->json(["message" => "ok"]);
        } else return response()->json(["message" => "false"]);
    }
}

