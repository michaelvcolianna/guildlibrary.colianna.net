<?php

namespace App\Http\Livewire;

use App\Models\Entry;
use Livewire\Component;

class Spoilers extends Component
{
    public $level;
    public $route;
    public $parameters;

    protected $rules = [
        'level' => 'in:0,1,2,3',
    ];

    public function mount($route, $parameters)
    {
        $this->route = $route;
        $this->parameters = $parameters;
        $this->level = session('level', 0);
    }

    public function render()
    {
        return view('livewire.spoilers');
    }

    public function updatedLevel($value)
    {
        session(['level' => $value]);

        if($this->route === 'entry')
        {
            $this->parameters['entry'] = Entry::find($this->parameters['entry']['slug']);
        }

        return redirect()->route($this->route, $this->parameters);
    }
}
