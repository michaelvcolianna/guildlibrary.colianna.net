<div class="field text">
    <label for="{{ $attributes->get('id') }}">{{ $label ?? $slot }}</label>

    <input type="text" value="{{ $value }}" {{ $attributes }}>
</div>
