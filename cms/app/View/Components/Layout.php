<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Layout extends Component
{
    public $links;

    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        $this->links = [
            route('home') => [
                'label' => 'Add Entry',
                'active' => request()->routeIs('home'),
            ],
        ];

        foreach(config('categories') as $key => $category)
        {
            $this->links[route('entries.list', ['key' => $key])] = [
                'label' => $category['name'],
                'active' => request()->is('category/'.$key),
            ];
        }
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('layout');
    }
}
