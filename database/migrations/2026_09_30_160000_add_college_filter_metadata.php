<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('colleges', function (Blueprint $table) {
            $table->text('hostel_facilities')->nullable();
            $table->decimal('hostel_fee', 10, 2)->nullable();
            $table->text('facilities')->nullable();
        });

        Schema::table('courses', function (Blueprint $table) {
            $table->string('degree')->nullable();
            $table->string('study_mode', 50)->nullable();
            $table->string('specialization')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn(['degree', 'study_mode', 'specialization']);
        });

        Schema::table('colleges', function (Blueprint $table) {
            $table->dropColumn(['hostel_facilities', 'hostel_fee', 'facilities']);
        });
    }
};