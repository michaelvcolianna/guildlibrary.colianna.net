<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>The Guild Library</title>
        <x-fonts />
        @vite(['resources/css/app.scss', 'resources/js/app.js'])
    </head>

    <body>
        <header>
            <strong>The Guild Library</strong>

            <ul>
                @foreach($links as $href => $link)
                    <li>
                        <a
                            href="{{ $href }}"
                            {!! $link['active'] ? 'aria-current="page"' : '' !!}
                        >
                            {{ $link['label'] }}
                        </a>
                    </li>
                @endforeach
            </ul>
        </header>

        <main>
            <h1>{{ $title }}</h1>

            {{ $slot}}
        </main>
    </body>
</html>
