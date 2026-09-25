<!DOCTYPE html>
<html>

<head>
    <title>Products</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f5f6fa;
        }

        .header {
            background: #222;
            color: white;
            padding: 20px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header h1 {
            margin: 0;
            font-size: 28px;
        }

        .cart-button {
            background: #27ae60;
            color: white;
            text-decoration: none;
            padding: 11px 20px;
            border-radius: 7px;
        }

        .container {
            width: 85%;
            margin: 40px auto;
        }

        .page-title {
            font-size: 34px;
            font-weight: bold;
            margin-bottom: 30px;
        }

        .products {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
        }

        .product-card {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .product-card h2 {
            margin: 0 0 15px 0;
            font-size: 22px;
        }

        .price {
            font-size: 19px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .add-button {
            display: inline-block;
            background: #222;
            color: white;
            text-decoration: none;
            padding: 11px 18px;
            border-radius: 7px;
        }

        .add-button:hover {
            background: #27ae60;
        }

        @media (max-width: 800px) {
            .products {
                grid-template-columns: 1fr;
            }

            .container {
                width: 90%;
            }
        }

        .edit-button {
            display: inline-block;
            background: #3498db;
            color: white;
            text-decoration: none;
            padding: 11px 18px;
            border-radius: 7px;
            margin-left: 8px;
        }
        .delete-button {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 11px 18px;
    border-radius: 7px;
    cursor: pointer;
    font-size: 14px;
    margin-left: 8px;
}

.delete-button:hover {
    background: #c0392b;
}
    </style>
</head>

<body>

    <div class="header">

        <h1>🛍️ My Store</h1>

        <a href="/cart" class="cart-button">
            🛒 View Cart
        </a>

    </div>

    <div class="container">

        <div class="page-title">
            Products
        </div>

        <div class="products">

            @foreach($products as $product)

                <div class="product-card">

                    <h2>{{ $product->name }}</h2>

                    <div class="price">
                        ₹{{ number_format($product->price, 2) }}
                    </div>
                    <a href="/cart/add/{{ $product->id }}" class="add-button">Add to Cart</a>

                    <a href="/products/{{ $product->id }}/edit" class="edit-button">Edit</a>

                    <form action="/products/{{ $product->id }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')

                        <button type="submit" class="delete-button">Delete</button>
                    </form>

                </div>

            @endforeach

        </div>
        <H3></H3>

    </div>

</body>

</html>