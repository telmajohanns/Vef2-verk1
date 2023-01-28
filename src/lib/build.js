import { readdir } from 'fs/promises';

const DATA = '../data';

async function main() {
    const files = await readdir(DATA);
    console.log('files :>> ', files);
}

main().catch((err) => console.error(err));