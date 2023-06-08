<?php

namespace App\Http\Controllers;

use App\Models\BillDetail;
use App\Models\Slide;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\TypeProduct;


class PageNewController extends Controller
{
    public function getIndex()
    {
        $slide = Slide::all();
        $new_product = Product::where('new', 1)->take(4)->get();
        $top_product = Product::where('new', 0)->take(8)->get();
        return view('page.trangchu', compact('slide', 'new_product', 'top_product'));
    }

    public function getDetail(Request $request)
    {
        $sanpham = Product::where('id', $request->id)->first();
        $splienquan = Product::where('id', '<>', $sanpham->id, 'and', 'id_type', '=', $sanpham->id_type)->paginate(3);
        $comments = Comment::where('id_product', $request->id)->get();
        return view('page.chitiet_sanpham', compact('sanpham', 'splienquan', 'comments'));
    }

    public function getType($type)
    {
        $type_product = TypeProduct::all();
        $sp_theoloai = Product::where('id_type', $type)->get();
        $sp_khac = Product::where('id_type', '<>', $type)->paginate(3);
        return view('page.loai_sanpham', compact('sp_theoloai', 'type_product', 'sp_khac'));
    }
    public function getIndexAdmin()
    {
        $product = Product::all();
        return view('pageadmin.admin')->with(['products' => $product, 'sumSold' => count(BillDetail::all())]);
    }

    public function getAdminAdd(){
        return view('pageadmin.f_edit');
    }

    public function postAdminAdd(Request $request)
    {
        $product = new Product();

        if ($request->hasFile('inputImage')) {
            $file = $request->file('inputImage');
            $fileName = $file->getClientOriginalName();
            $file->move('source/image/product', $fileName);
            $product->image = $fileName;
        }

        $product->name = $request->inputName;
        $product->description = $request->inputDescription;
        $product->unit_price = $request->inputPrice;
        $product->promotion_price = $request->inputPromotionPrice;
        $product->unit = $request->inputUnit;
        $product->new = $request->inputNew;
        $product->id_type = $request->inputType;
        $product->save();
        return $this->getIndexAdmin();
    }

    public function postAdminDelete($id)
    {
        $product = Product::find($id);
        $product->delete();
        return $this->getIndexAdmin();
    }
    public function getAdminEdit($id)
    {
        $product = Product::find($id);
        return view('pageadmin.f_edit')->with('product', $product);
    }
    public function postAdminEdit(Request $request)
    {
        $id = $request->editId;
        $product = Product::find($id);

        if ($request->hasFile('editImage')) {
            $file = $request->file('editImage');
            $fileName = $file->getClientOriginalName();
            $file->move('source/image/product', $fileName);
            $product->image = $fileName;
        }

        $product->name = $request->editName;
        $product->description = $request->editDescription;
        $product->unit_price = $request->editPrice;
        $product->promotion_price = $request->editPromotionPrice;
        $product->unit = $request->editUnit;
        $product->new = $request->editNew;
        $product->id_type = $request->editType;
        $product->save();
        return $this->getIndexAdmin();
    }

}
