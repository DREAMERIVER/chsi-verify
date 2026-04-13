import { defineConfig } from 'rolldown';

export default defineConfig({
    input: 'src/index.ts',
    output: {
        file: './dist/chsi-verify.prod.js',
        codeSplitting: false,
    },
});