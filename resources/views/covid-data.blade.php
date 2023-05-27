<!DOCTYPE html>
<html>
<head>
    <title>Covid Data</title>
</head>
<body>
    <h1>All Routes:</h1>
    <table>
        @foreach($data as $route)
        <tr>
            <td>
                {{ $route}}
            </td>
        </tr>
        @endforeach
        </table>
</body>
</html>
