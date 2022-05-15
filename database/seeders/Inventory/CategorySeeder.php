<?php

namespace Database\Seeders\Inventory;

use Illuminate\Database\Seeder;
use App\Models\Inventory\Product;
use App\Models\Inventory\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::factory()
            ->count(10)
            ->create()
            ->each(fn ($category) => $category->products()->saveMany(Product::factory()->count(5)->make()));
    }
}
