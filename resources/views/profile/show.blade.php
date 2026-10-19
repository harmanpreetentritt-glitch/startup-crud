@extends('collegeListLayout.layout')

@section('title', 'My Profile - CampusPath')

@push('styles')
<style>
    .pf-page {
        min-height: calc(100vh - 200px);
        padding: 48px 20px;
        font-family: 'Nunito', sans-serif;
        color: #3a3b45;
    }

    .pf-wrap { max-width: 560px; margin: 0 auto; }

    .pf-crumb {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 16px;
        font-size: 0.85rem;
        font-weight: 600;
        color: #858796;
        text-decoration: none;
    }
    .pf-crumb:hover { color: #224abe; }

    .pf-card {
        background: #fff;
        border: 1px solid #e3e6f0;
        border-radius: 14px;
        box-shadow: 0 0.15rem 1.75rem rgba(58, 59, 69, 0.08);
        overflow: hidden;
    }

    .pf-head {
        display: flex;
        align-items: center;
        gap: 18px;
        padding: 28px;
        border-bottom: 1px solid #e3e6f0;
    }

    .pf-avatar {
        width: 64px;
        height: 64px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        background: #05003f;
        color: #fff;
        font-size: 1.6rem;
        font-weight: 800;
    }

    .pf-name { margin: 0; font-size: 1.35rem; font-weight: 800; line-height: 1.2; }
    .pf-role { margin: 4px 0 0; font-size: 0.85rem; color: #858796; }

    .pf-list { margin: 0; padding: 8px 28px; list-style: none; }

    .pf-row {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px 0;
        border-bottom: 1px solid #f0f1f7;
    }
    .pf-row:last-child { border-bottom: 0; }

    .pf-icon {
        width: 38px;
        height: 38px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: #eef2f9;
        color: #4e73df;
        font-size: 0.95rem;
    }

    .pf-label {
        display: block;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #858796;
    }

    .pf-value {
        display: block;
        margin-top: 2px;
        font-size: 0.98rem;
        font-weight: 600;
        word-break: break-all;
    }

    .pf-foot {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        padding: 18px 28px;
        background: #f8f9fc;
        border-top: 1px solid #e3e6f0;
    }

    .pf-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        border-radius: 10px;
        border: 1px solid #d1d3e2;
        background: #fff;
        color: #3a3b45;
        font-size: 0.88rem;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.15s;
    }
    .pf-btn:hover { border-color: #4e73df; color: #224abe; }

    .pf-btn--primary { background: #05003f; border-color: #05003f; color: #fff; }
    .pf-btn--primary:hover { background: #224abe; border-color: #224abe; color: #fff; }

    @media (max-width: 480px) {
        .pf-head { padding: 22px; }
        .pf-list { padding: 4px 22px; }
        .pf-foot { padding: 16px 22px; flex-direction: column; }
        .pf-btn { justify-content: center; }
    }
</style>
@endpush

@section('content')
<div class="pf-page">
    <div class="pf-wrap">

        <a href="{{ url('/colleges') }}" class="pf-crumb">
            <i class="fas fa-arrow-left"></i> Back to colleges
        </a>

        <div class="pf-card">

            <div class="pf-head">
                <div class="pf-avatar" aria-hidden="true">
                    {{ strtoupper(mb_substr($user->name, 0, 1)) }}
                </div>
                <div>
                    <h1 class="pf-name">{{ $user->name }}</h1>
                    <p class="pf-role">CampusPath account</p>
                </div>
            </div>

            <ul class="pf-list">
                <li class="pf-row">
                    <span class="pf-icon"><i class="fas fa-user"></i></span>
                    <div>
                        <span class="pf-label">Full name</span>
                        <span class="pf-value">{{ $user->name }}</span>
                    </div>
                </li>

                <li class="pf-row">
                    <span class="pf-icon"><i class="fas fa-envelope"></i></span>
                    <div>
                        <span class="pf-label">Email</span>
                        <span class="pf-value">{{ $user->email }}</span>
                    </div>
                </li>

                <li class="pf-row">
                    <span class="pf-icon"><i class="fas fa-calendar"></i></span>
                    <div>
                        <span class="pf-label">Member since</span>
                        <span class="pf-value">{{ $user->created_at->format('d M Y') }}</span>
                    </div>
                </li>
            </ul>

            <div class="pf-foot">
                <a href="{{ url('/colleges') }}" class="pf-btn">Browse colleges</a>
                <a href="{{ url('/logout') }}" class="pf-btn pf-btn--primary">
                    <i class="fas fa-right-from-bracket"></i> Log out
                </a>
            </div>

        </div>
    </div>
</div>
@endsection