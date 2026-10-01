<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   public function up(): void
{
    Schema::table('colleges', function (Blueprint $table) {
        if (!Schema::hasColumn('colleges', 'hostel_facilities')) {
            $table->text('hostel_facilities')->nullable();
        }

        if (!Schema::hasColumn('colleges', 'hostel_fee')) {
            $table->decimal('hostel_fee', 10, 2)->nullable();
        }

        if (!Schema::hasColumn('colleges', 'facilities')) {
            $table->text('facilities')->nullable();
        }
    });

    Schema::table('courses', function (Blueprint $table) {
        if (!Schema::hasColumn('courses', 'degree')) {
            $table->string('degree')->nullable();
        }

        if (!Schema::hasColumn('courses', 'study_mode')) {
            $table->string('study_mode', 50)->nullable();
        }

        if (!Schema::hasColumn('courses', 'specialization')) {
            $table->string('specialization')->nullable();
        }
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