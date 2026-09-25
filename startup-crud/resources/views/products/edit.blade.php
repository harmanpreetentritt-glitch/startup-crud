<!DOCTYPE html>
<html>
<head>
    <title>Edit Product</title>
</head>
<body>

    <h1>Edit Product</h1>

    <form action="/products/{{ $product->id }}" method="POST">

        @csrf
        @method('PUT')

        <div>
            <label>Product Name</label>
            <input type="text" name="name" value="{{ $product->name }}">
        </div>

        <br>

        <div>
            <label>Price</label>
            <input type="number" name="price" value="{{ $product->price }}">
        </div>

        <br>

        <button type="submit">Update Product</button>

    </form>

    <br>

    <a href="/products">Back to Products</a>

</body>
</html>