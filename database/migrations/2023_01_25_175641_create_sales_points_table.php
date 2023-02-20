<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_points', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('denomination', 100);
            $table->text('description');
            $table->mediumText('note');
            $table->string('phone', 15);
            $table->string('street', 255);
            $table->string('street_number', 255);
            $table->string('city', 100);
            $table->string('province', 50);
            $table->string('state', 50);
            $table->string('postcode', 10);
            $table->string('taxonomy', 1000);
            $table->string('spc', 50);
            $table->unsignedDecimal('latitude', $precision = 20, $scale = 18);
            $table->unsignedDecimal('longitude', $precision = 20, $scale = 18);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales_points');
    }
};
