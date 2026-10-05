<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('colleges', function (Blueprint $table) {
            $table->dropColumn([
                'stream',
                'degree',
                'study_mode',
                'specialization',
                'exam',
            ]);
        });
    }

    public function down(): void
    {
        Schema::table('colleges', function (Blueprint $table) {
            $table->string('stream')->nullable();
            $table->string('degree')->nullable();
            $table->string('study_mode')->nullable();
            $table->string('specialization')->nullable();
            $table->string('exam')->nullable();
        });
    }
};