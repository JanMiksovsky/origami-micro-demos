This is a quick exploration of how a markdown document could contain specific blocks of text in more than one language.

The `markdown/sample.md` document shows one way this might be done: by using an Origami object literal. Each key is a ISO 639-1 language code; the value is some text in that language.

This object literal is passed to a small template that formats the text in some way to indicate the language, e.g., with the `lang` attribute.

A small data pipeline invokes the [text:inline](https://weborigami.org/builtins/text/inline) builtin to inline the `${ }` substitutions, then transforms the markdown to HTML.
