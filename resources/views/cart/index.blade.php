<!DOCTYPE html>
<html>
<head>
    <title>Shopping Cart</title>

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
        }

        .products-button {
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
            box-shadow: 0 4px 12px rgba(0,0,0,.08);
        }

        .product-card h2 {
            margin: 0 0 15px 0;
        }

        .price {
            font-size: 19px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .quantity {
            margin-bottom: 20px;
        }

        .quantity-btn {
            display: inline-block;
            background: #222;
            color: white;
            text-decoration: none;
            padding: 5px 12px;
            margin: 0 5px;
            border-radius: 5px;
        }

        .remove {
            display: inline-block;
            background: #e74c3c;
            color: white;
            text-decoration: none;
            padding: 9px 15px;
            border-radius: 6px;
        }

        .cart-total {
            margin-top: 30px;
            background: white;
            padding: 20px 25px;
            border-radius: 10px;
            text-align: right;
        }

        .empty {
            background: white;
            padding: 30px;
            border-radius: 10px;
            font-size: 20px;
        }

        @media(max-width:800px) {
            .products {
                grid-template-columns: 1fr;
            }

            .container {
                width: 90%;
            }
        }
    </style>
</head>

<body>

<div class="header">

    <h1>🛒 My Cart</h1>

    <a href="/products" class="products-button">
        🛍️ Continue Shopping
    </a>

</div>

<div class="container">

    <div class="page-title">
        Shopping Cart
    </div>

    @if($cart->count() > 0)

        @php
            $total = 0;
        @endphp

        <div class="products">

            @foreach($cart as $item)

                @php
                    $subtotal = $item->price * $item->quantity;
                    $total += $subtotal;
                @endphp

                <div class="product-card">

                    <h2>
                        {{ $item->product->name }}
                    </h2>

                    <div class="price">
                        ₹{{ number_format($item->price, 2) }}
                    </div>

                    <div class="quantity">

                        Quantity:

                        <a href="/cart/decrease/{{ $item->id }}"
                           class="quantity-btn">
                            −
                        </a>

                        <strong>
                            {{ $item->quantity }}
                        </strong>

                        <a href="/cart/increase/{{ $item->id }}"
                           class="quantity-btn">
                            +
                        </a>

                    </div>

                    <div>
                        Subtotal:
                        ₹{{ number_format($subtotal, 2) }}
                    </div>

                    <br>

                    <a href="/cart/remove/{{ $item->id }}"
                       class="remove">
                        Remove
                    </a>

                </div>

            @endforeach

        </div>

        <div class="cart-total">

            <h2>
                Total: ₹{{ number_format($total, 2) }}
            </h2>

        </div>

    @else

        <div class="empty">
            Your cart is empty.
        </div>

    @endif

</div>

</body>
</html>