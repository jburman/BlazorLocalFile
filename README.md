# BlazorLocalFile

This repository contains test code for loading a blob into Mono WASM (Blazor app) using Fetch. This is intended to only prove that it's possible. Since **HttpRequestMessage** currently [prevents](https://github.com/mono/mono/blob/6b858ef9d75a5aaea344529b640eeb30d4d78740/mcs/class/System.Net.Http/System.Net.Http/HttpRequestMessage.cs#L99) the **blob:** scheme (https://www.w3.org/TR/FileAPI/#url) the test code hooks in at the browser's fetch method to pre-pend the URL with **blob:** and the unsuspecting Mono code loads it back in as a byte array.
