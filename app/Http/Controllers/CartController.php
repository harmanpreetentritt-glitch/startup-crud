<?php

namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\Order;
use App\Models\OrderItem;
class CartController extends Controller
{
   public function add($id)
{
    $product = Product::find($id);

   $order = Order::firstOrCreate(
    [
        'user_id' => auth()->id(),
        'status' => 'pending'
    ],
    [
        'total' => 0
    ]
);

session(['order_id' => $order->id]);
    $orderItem = OrderItem::where('order_id', $order->id)
        ->where('product_id', $product->id)
        ->first();

    if ($orderItem) {
        $orderItem->quantity++;
        $orderItem->save();
    } else {
        OrderItem::create([
            'order_id' => $order->id,
            'product_id' => $product->id,
            'quantity' => 1,
            'price' => $product->price
        ]);
    }

    $this->updateOrderTotal($order);

    return redirect('/products');
}
public function index()
{
    $order = Order::where('user_id', auth()->id())
        ->where('status', 'pending')
        ->first();

    if ($order) {
        $cart = $order->orderItems()->with('product')->get();
    } else {
        $cart = collect();
    }

    return view('cart.index', compact('cart'));
}
public function increase($id)
{
    $orderItem = OrderItem::find($id);

    if ($orderItem) {
        $orderItem->quantity++;
        $orderItem->save();

        $this->updateOrderTotal($orderItem->order);
    }

    return redirect('/cart');
}
    public function decrease($id)
{
    $orderItem = OrderItem::find($id);

    if ($orderItem) {

        if ($orderItem->quantity > 1) {
            $orderItem->quantity--;
            $orderItem->save();

            $this->updateOrderTotal($orderItem->order);
        }

    }

    return redirect('/cart');
}
public function remove($id)
{
    $orderItem = OrderItem::find($id);

    if ($orderItem) {
        $order = $orderItem->order;

        $orderItem->delete();

        $this->updateOrderTotal($order);
    }

    return redirect('/cart');
}
private function updateOrderTotal($order)
{
    $total = $order->orderItems->sum(function ($item) {
        return $item->price * $item->quantity;
    });

    $order->total = $total;
    $order->save();
}
public function updateOrder()
{
    $orderId = session('order_id');

    $order = Order::find($orderId);

    if ($order) {
        $order->status = 'confirmed';
        $order->save();
    }

    return redirect('/cart');
}
public function updateOrderItem($id, $quantity)
{
    $orderId = session('order_id');

    $orderItem = OrderItem::where('id', $id)
        ->where('order_id', $orderId)
        ->first();

    if ($orderItem) {
        $orderItem->quantity = $quantity;
        $orderItem->save();

        $this->updateOrderTotal($orderItem->order);
    }

    return redirect('/cart');
}
public function updateSession()
{
    session()->put('order_id', 2);

    return 'Order ID in Session: ' . session('order_id');
}


public function deleteSession()
{
    session()->forget('order_id');

    return 'Order ID deleted from session';
}
}
