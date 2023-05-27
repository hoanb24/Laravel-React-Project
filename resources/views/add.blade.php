<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Add Room</title>
    <style>

        .room img {
            flex-basis: calc(25% - 10px);
            width: 200px;
            border-radius: 20px;
        }
    </style>
    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>

</head>

<body>
    <center>
        <form action="/add" method="post">
            @csrf
            <h2>Thêm phòng khách sạn</h2>
            <div class="form">
                <label for=""> Tên phòng
                    <input type="text" name="roomname" placeholder="Tên phòng" class="form-control">
                </label>
                <br><br><br>
                <label for=""> Mô tả phòng
                    <input type="text" name="des" placeholder="Mô tả" class="form-control">
                </label> <br><br>
                <label for=""> Giá
                    <input type="text" name="price" placeholder="Giá" class="form-control">
                </label> <br><br>
                <label for=""> Hình ảnh
                    <input type="text" name="img" placeholder="Link ảnh" class="form-control">
                </label> <br><br>
            </div>
            <div class="title-row">

                <button type="submit" name="sbm" class="btn btn-success">
                    Thêm
                </button><br><br>
            </div>
        </form>
    </center>
    <div class="products container">
        <div class="row">
        @foreach ($rooms as $room)
            <form method="post" action="/book">
                <div class="room col-md-4">
                    <img src="{{ $room->image }}" alt="">
                    <h4 style="color:blueviolet;">{{ $room->room_name }}</h4>
                    <p>{{ $room->description }}</p>
                    <p style="color:red;">Price: {{ $room->price }}</p>
                    <button class="btn btn-success">Book now</button>
                </div>
            </form>
        @endforeach
    </div>
    </div>
</body>

</html>
