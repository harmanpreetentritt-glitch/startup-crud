<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up(): void
{
    Schema::table('courses', function (Blueprint $table) {
        if (!Schema::hasColumn('courses', 'eligibility')) {
            $table->text('eligibility')->nullable()->after('duration');
        }

        if (!Schema::hasColumn('courses', 'exam_required')) {
            $table->string('exam_required', 255)->nullable()->after('eligibility');
        }
    });
}

    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn(['eligibility', 'exam_required']);
        });
    }
};
