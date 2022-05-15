<?php

namespace Database\Factories\Inventory;

use App\Models\Inventory\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Inventory\Product>
 */
class ProductFactory extends Factory
{

    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'slug' => $this->faker->slug,
            'description' => $this->faker->sentence,
            'price' => $this->faker->randomFloat(2, 0, 100),
            'stock' => $this->faker->randomNumber(2),
            'image_url' => $this->faker->imageUrl(),
        ];
    }
}
