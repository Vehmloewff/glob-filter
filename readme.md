# glob-filter

[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/glob_filter/mod.ts)

Check if a glob matches a filepath.

## Usage

```ts
import { checkFile, filterFiles } from 'https://deno.land/x/glob_filter/mod.ts'

filterFiles(['./some-file.ts', 'other-file.ts', 'file/in/dir'], { match: '**/*.ts', ignore: '**/*dir*' })
// -> ['./some-file.ts', 'other-file.ts']

checkFile({ file: './some-file.ts', glob: { match: ['**/*.test.ts', 'test/*.ts']} })
// -> false
```
