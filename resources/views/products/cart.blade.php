<!DOCTYPE html>
<html>
<head>
    <title>Shopping Cart</title>

    <style>
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
        }

        .back {
            color: white;
            text-decoration: none;
            background: #444;
            padding: 10px 18px;
            border-radius: 6px;
        }

        .container {
            width: 85%;
            margin: 40px auto;
        }

        .cart-title {
            font-size: 32px;
            margin-bottom: 25px;
        }

        .cart-item {
            background: white;
            padding: 25px;
            margin-bottom: 18px;
            border-radius: 12px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .product-name {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .price {
            color: #555;
            margin-bottom: 12px;
        }

        .quantity {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .quantity a {
            text-decoration: none;
            background: #222;
            color: white;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            font-size: 20px;
        }

        .quantity span {
            font-size: 18px;
            font-weight: bold;
            min-width: 25px;
            text-align: center;
        }

        .remove {
            text-decoration: none;
            background: #e74c3c;
            color: white;
            padding: 9px 15px;
            border-radius: 6px;
        }

        .remove:hover {
            background: #c0392b;
        }

        .summary {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
            text-align: right;
            margin-top: 25px;
        }

        .summary h2 {
            margin: 0 0 15px;
        }

        .checkout {
            background: #27ae60;
            color: white;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 7px;
            display: inline-block;
        }

        .checkout:hover {
            background: #219150;
        }
    </style>
</head>

<body>

    <div class="header">
        <h1>🛒 My Shopping Cart</h1>

        <a href="/products" class="back">
            Continue Shopping
        </a>
    </div>

    <div class="container">

        <div class="cart-title">
            Shopping Cart
        </div>

@foreach($cart as $id => $item)

    <div class="product-card">

        <h2>{{ $item['name'] }}</h2>

        <div class="price">
            ₹{{ number_format($item['price'], 2) }}
        </div>

        <div class="quantity">
            Quantity:

            <a href="/cart/decrease/{{ $id }}" class="quantity-btn">
                −
            </a>

            <span>{{ $item['quantity'] }}</span>

            <a href="/cart/increase/{{ $id }}" class="quantity-btn">
                +
            </a>
        </div>

        <a href="/cart/remove/{{ $id }}" class="remove">
            Remove
        </a>

    </div>

@endforeach

        <div class="summary">

            <h2>Cart Summary</h2>

            <a href="#" class="checkout">
                Checkout
            </a>

        </div>

    </div>

</body>
</html>