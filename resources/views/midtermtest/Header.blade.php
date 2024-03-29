    <!-- Page Preloder -->
    <div id="preloder">
        <div class="loader"></div>
    </div>

    <!-- Header Section Begin -->
    <header class="header-section">
        <div class="header-top">
            <div class="container">
                <div class="ht-left">
                    <div class="mail-service">
                        <i class=" fa fa-envelope"></i>
                        <b>hello.colorlib@gmail.com
                    </div>
                    <div class="phone-service">
                        <i class=" fa fa-phone"></i>
                        +65 11.188.888
                    </div>
                </div>
                <div class="ht-right">
                    <a href="#" class="login-panel">
                        <i class="fa fa-user"></i>
                        Login
                    </a>
                    <div class="lan-selector">

                        <select class="language_drop" name="countries" id="countries" style="width:300px;">

                            <option value='yt' data-image="sourcemid/img/flag-1.jpg" data-imagecss="flag yt"
                                data-title="English">
                                English
                            </option>

                            <option value='yu' data-image="sourcemid/img/flag-2.jpg" data-imagecss="flag yu"
                                data-title="Bangladesh">
                                German </option>
                        </select>
                    </div>
                    <div class="top-social">
                        <a href="#"><i class="ti-facebook"></i></a>
                        <a href="#"><i class="ti-twitter-alt"></i></a>
                        <a href="#"><i class="ti-linkedin"></i></a>
                        <a href="#"><i class="ti-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="inner-header">
                <div class="row">
                    <div class="col-lg-2 col-md-2">
                        <div class="logo">
                            <a href="#">
                                <img src="sourcemid/img/logo.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7">
                        <div class="advanced-search">
                            <button type="button" class="category-btn">All Categories</button>
                            <form action="#" class="input-group">
                                <input type="text" placeholder="What do you need?">
                                <button type="button"><i class="ti-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 text-right col-md-3">
                        <ul class="nav-right">
                            <li class="heart-icon"><a href="#">
                                    <i class="icon_heart_alt"></i>
                                    <span>1</span>
                                </a>
                            </li>
                            <li class="cart-icon"><a href="#">
                                    <i class="icon_bag_alt"></i>
                                    @if(session('cart'))
                                    <span> {{ count(session('cart')) }}</span>
                                    @endif
                                </a>
                                <div class="cart-hover">
                                    <div class="select-items">
                                        <table>
                                            <tbody>
                                                {{-- <tr>
                                                    <td class="si-pic"><img src="sourcemid/img/select-product-1.jpg"
                                                            alt=""></td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>₫60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td class="si-close">
                                                        <i class="ti-close"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="si-pic"><img src="sourcemid/img/select-product-2.jpg"
                                                            alt=""></td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>₫60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td class="si-close">
                                                        <i class="ti-close"></i>
                                                    </td>
                                                </tr> --}}


                                                <!-- Hiển thị dữ liệu giỏ hàng -->
                                                @foreach (session('cart', []) as $productId => $product)
                                                    <tr>
                                                        <td class="si-pic"><img
                                                                src="sourcemid/img/products/{{ $product['image'] }}"
                                                                alt=""></td>
                                                        <td class="si-text">
                                                            <div class="product-selected">
                                                                <p>₫{{ $product['price'] }} x {{ $product['quantity'] }}
                                                                </p>
                                                                <h6>{{ $product['name'] }}</h6>
                                                            </div>
                                                        </td>
                                                        <td class="si-close">
                                                            <form action="{{ route('removeItem') }}" method="POST">
                                                                @csrf
                                                                <input type="hidden" name="product_id" value="{{ $product['id'] }}">
                                                                <button type="submit" class="ti-close"></button>
                                                            </form>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                                {{-- <!-- Hiển thị thông tin từng sản phẩm trong giỏ hàng -->
                                                @foreach (session('cart', []) as $product)
                                                    <div>
                                                        <div>aaaaaaaaaaaaaa</div>
                                                        <span>{{ $product['name'] }}</span>
                                                        <span>{{ $product['price'] }}</span>
                                                        <span>{{ $product['quantity'] }}</span>
                                                        <span>price:{{ $product['price'] }}</span>

                                                        <!-- Hiển thị các thuộc tính khác nếu có -->
                                                    </div>
                                                @endforeach --}}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="total-amount">
                                        <h4>Tổng số tiền: ₫{{ session('total') }}</h4>
                                    </div>

                                    <div class="select-button">
                                        <a href="#" class="primary-btn view-card">VIEW CARD</a>
                                        <a href="/shoppingcart" class="primary-btn checkout-btn">CHECK OUT</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-item">
            <div class="container">
                <div class="nav-depart">
                    <div class="depart-btn">
                        <i class="ti-menu"></i>
                        <span>All departments</span>
                        <ul class="depart-hover">
                            <li class="active"><a href="#">Women’s Clothing</a></li>
                            <li><a href="#">Men’s Clothing</a></li>
                            <li><a href="#">Underwear</a></li>
                            <li><a href="#">Kid's Clothing</a></li>
                            <li><a href="#">Brand Fashion</a></li>
                            <li><a href="#">Accessories/Shoes</a></li>
                            <li><a href="#">Luxury Brands</a></li>
                            <li><a href="#">Brand Outdoor Apparel</a></li>
                        </ul>
                    </div>
                </div>
                <nav class="nav-menu mobile-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Collection</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Pages</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
            </div>
        </div>
    </header>
    <!-- Header End -->
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text">
                        <a href="#"><i class="fa fa-home"></i> Home</a>
                        <span>Shop</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->
