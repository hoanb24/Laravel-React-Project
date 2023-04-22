<form action="/calculate" method="post">
    @csrf
    <label for="number1">Number 1:</label>
    <input type="number" name="number1" id="number1" required>

    <label for="number2">Number 2:</label>
    <input type="number" name="number2" id="number2" required>

    <button type="submit">Calculate</button>
</form>

@if (isset($sum))
    <p>Sum: {{ $sum }}</p>
@endif
