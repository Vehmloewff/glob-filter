import { checkFile } from './mod.ts'
import { assertEquals } from 'https://deno.land/std@0.71.0/testing/asserts.ts'
import { resolve } from 'https://deno.land/std@0.71.0/path/mod.ts'

Deno.test({
	name: 'should evaluate globs',
	fn() {
		assertEquals(checkFile({ file: './something.ts', glob: { match: '**/*.ts', ignore: ['test.ts', '**/mod.ts'] } }), true)
		assertEquals(checkFile({ file: 'in/here/mod.ts', glob: { match: ['test.ts', '**/mod.ts'], ignore: [] } }), true)
	},
})

Deno.test({
	name: 'should still work with funky paths',
	fn() {
		// remove-slash-one
		assertEquals(
			checkFile({
				file: '/something.ts',
				glob: { match: '**/*.ts', ignore: ['test.ts', '**/mod.ts'] },
				absolutePathsAction: 'remove-slash-one',
			}),
			true
		)
		// make-file-relative
		assertEquals(
			checkFile({
				file: resolve('something.ts'),
				glob: { match: 'something.ts', ignore: [] },
			}),
			true
		)
		// make-glob-absolute
		assertEquals(
			checkFile({
				file: resolve('something.ts'),
				glob: { match: '*something*', ignore: [] },
				absolutePathsAction: 'make-glob-absolute',
			}),
			true
		)
	},
})
