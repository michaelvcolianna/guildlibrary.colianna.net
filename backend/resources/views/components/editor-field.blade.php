<div class="field editor">
    <label for="{{ $attributes->get('id') }}">{{ $label ?? $slot }}</label>

    <textarea {{ $attributes }}>{{ $value }}</textarea>
</div>
