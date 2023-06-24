<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Models\Shops;
use App\Models\Orders;


class ShoppingCartController extends Controller
{
    public function checkout()
    {
        // Lấy thông tin sản phẩm từ session
        $cart = session('cart', []);

        // Lưu đơn hàng vào cơ sở dữ liệu
        foreach ($cart as $productId => $product) {
            $order = new Orders();
            $order->name = $product['name'];
            $order->image = $product['image'];
            $order->price = $product['price'];
            $order->quantity = $product['quantity'];
            $order->id_pro = $product['id'];
            $order->save();
            // Thực hiện xử lý và lưu dữ liệu sản phẩm trong đơn hàng (nếu cần)
        }

        // Xóa dữ liệu giỏ hàng trong session
        session()->forget('cart');
        session()->forget('total');
        // Hiển thị thông báo thành công
        return redirect()->back()->with('success', 'Đơn hàng đã được đặt thành công!');
    }

    public function getIndex()
    {
        $data = Shops::all();
        return view('midtermtest.Mastermid', compact('data'));
    }

    public function getShoppingCart()
    {

        return view('midtermtest.shoppingcart');
    }


    public function addItem(Request $request)
    {
        $productId = $request->input('product_id');
        $product = Shops::find($productId);

        if (!$product) {
            return redirect()->back()->with('error', 'Sản phẩm không tồn tại.');
        }

        $cart = $request->session()->get('cart', []);

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        if (isset($cart[$productId])) {
            // Nếu đã tồn tại, tăng số lượng sản phẩm
            $cart[$productId]['quantity']++;
        } else {
            // Nếu chưa tồn tại, thêm mới sản phẩm vào giỏ hàng
            $cart[$productId] = [
                'id' => $productId,
                'name' => $product->name,
                'price' => $product->price,
                'image' => $product->img,
                'quantity' => 1, // Khởi tạo số lượng sản phẩm là 1
                // Thêm thông tin khác về sản phẩm nếu cần
            ];
        }

        $request->session()->put('cart', $cart);

        $total = 0;

        foreach ($cart as $item) {
            $total += $item['price'] * $item['quantity'];
        }

        $request->session()->put('total', $total);

        return redirect()->back()->with('success', 'Thêm sản phẩm thành công!');
    }






    public function removeItem(Request $request)
    {
        $productId = $request->input('product_id');
        $cart = $request->session()->get('cart', []);

        if (isset($cart[$productId])) {
            unset($cart[$productId]);
            $request->session()->put('cart', $cart);
        }

        // Cập nhật lại tổng số tiền sau khi xóa sản phẩm
        $total = 0;
        foreach ($cart as $item) {
            $total += $item['price'] * $item['quantity'];
        }
        $request->session()->put('total', $total);

        return redirect()->back()->with('success', 'Xóa sản phẩm thành công!');
    }
}
