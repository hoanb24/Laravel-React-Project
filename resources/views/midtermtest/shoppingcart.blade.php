<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel </title>
    <link href='http://fonts.googleapis.com/css?family=Dosis:300,400' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
    {{-- <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="{{URL::to('source/assets/dest/css/font-awesome.min.css')}}">
	<link rel="stylesheet" href="{{URL::to('source/assets/dest/vendors/colorbox/example3/colorbox.css')}}">
	<link rel="stylesheet" href="{{URL::to('source/assets/dest/rs-plugin/css/settings.css')}}">
	<link rel="stylesheet" href="{{URL::to('source/assets/dest/rs-plugin/css/responsive.css')}}">
	<link rel="stylesheet" title="style" href="source/assets/dest/css/style.css">
	<link rel="stylesheet" href="{{URL::to('source/assets/dest/css/animate.css')}}">
	<link rel="stylesheet" title="style" href="{{URL::to('source/assets/dest/css/huong-style.css')}}"> --}}

    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ URL::to('sourcemid/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ URL::to('sourcemid/css/elegant-icons.css') }}">
    <link rel="stylesheet" href="{{ URL::to('sourcemid/css/font-awesome.min.css') }}">
    <link rel="stylesheet" title="style" href="{{ URL::to('sourcemid/css/jquery-ui.min.css') }}">
    <link rel="stylesheet" href="{{ URL::to('sourcemid/css/nice-select.css') }}">
    <link rel="stylesheet" title="style" href="{{ URL::to('sourcemid/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" title="style" href="{{ URL::to('sourcemid/css/slicknav.min.css') }}">
    <link rel="stylesheet" title="style" href="{{ URL::to('sourcemid/css/style.css') }}">
    <link rel="stylesheet" title="style" href="{{ URL::to('sourcemid/css/themify-icons.css') }}">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


</head>

<body>
    <!-- Page Preloder -->
    <div id="preloder">
        <div class="loader"></div>
    </div>
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <a href="/product"><i class="fa fa-home"></i> Home</a>
                        <a href="./shop.html">Shop</a>
                        <span>Shopping Cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Shopping Cart Section Begin -->
    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th class="p-name">Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach (session('cart', []) as $productId => $product)
                                    <tr>
                                        <td class="cart-pic"><img src="sourcemid/img/cart-page/{{ $product['image'] }}"
                                                alt=""></td>
                                        <td class="cart-title first-row">
                                            <h5>{{ $product['name'] }}</h5>
                                        </td>
                                        <td class="p-price first-row">₫{{ $product['price'] }}</td>
                                        <td class="qua-col first-row">
                                            <div class="quantity">
                                                <div class="pro-qty">
                                                    <input type="text" value="{{ $product['quantity'] }}">
                                                </div>
                                            </div>
                                        </td>
                                        <td class="total-price first-row">
                                            ₫{{ $product['price'] * $product['quantity'] }}</td>
                                        <td class="si-close">
                                            <form action="{{ route('removeItem') }}" method="POST">
                                                @csrf
                                                <input type="hidden" name="product_id" value="{{ $product['id'] }}">
                                                <button type="submit" class="ti-close"></button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 offset-lg-8">
                            <div class="proceed-checkout">
                                <ul>
                                    <li class="cart-total">Total <span> ₫{{ session('total') }}</span></li>
                                </ul>
                                <form action="{{ route('checkout') }}" method="POST">
                                    @csrf
                                    <button type="submit" class="proceed-btn">PROCEED TO CHECK OUT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @if (session('success'))
            <script>
                Swal.fire({
                    text: '{{ session('success') }}',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            </script>
        @endif
    </section>



    @include('midtermtest.Footer')

    @include('midtermtest.script')

    <!-- include js files -->
</body>



</html>
