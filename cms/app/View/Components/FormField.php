<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class FormField extends Component
{
    public $label;
    public $type;
    public $value;

    /**
     * Create a new component instance.
     *
     * @param  string  $type
     * @param  string  $value
     * @param  string  $label
     * @return void
     */
    public function __construct($type, $value = null, $label = null)
    {
        $this->label = $label;
        $this->type = $type;
        $this->value = $value;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.'.$this->type.'-field');
    }
}
