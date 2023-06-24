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

</head>

<body>

    @include('midtermtest.Header')
    <!-- Product Shop Section Begin -->
    <section class="product-shop spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 order-1 order-lg-2">
                    <div class="product-list">
                        <div class="row">

                            @foreach ($data as $items)
                                <div class="col-lg-4 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src="sourcemid/img/products/{{ $items->img }}" alt="">
                                            <div class="sale pp-sale">Sale</div>
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active">
                                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                                </li>
                                                <li class="quick-view">
                                                    <form action="{{ route('cart.add') }}" method="POST">
                                                        @csrf
                                                        <input type="hidden" name="product_id"
                                                            value="{{ $items->id }}">
                                                        <button type="submit">+ Add Cart</button>
                                                    </form>
                                                </li>
                                                <li class="w-icon">
                                                    <a href="#"><i class="fa fa-random"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>{{ $items->name }}</h5>
                                            </a>
                                            <div class="product-price">
                                                ₫{{ $items->price }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach




                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    <!-- Product Shop Section End -->

    @include('midtermtest.Footer')

    @include('midtermtest.script')

    <!-- include js files -->
</body>

</html>
