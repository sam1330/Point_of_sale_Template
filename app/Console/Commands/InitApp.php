<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class InitApp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:init';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to initialize the application with the default data';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Initializing the application with the default data');

        if (!$this->confirm('Do you wish to continue?')) {
            return 0;
        }
        
        $this->call('optimize');
        $this->call('migrate:fresh');
        $this->call('db:seed');


        return 0;
    }
}
