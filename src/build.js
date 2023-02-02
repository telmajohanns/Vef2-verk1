import { mkdir, writeFile } from 'fs/promises';
import { direxists, readFile } from './lib/make-file.js';
import { join } from 'path';
import { indexTemplate, newPageTemplate} from './lib/make-html.js';


const DATA_DIR = './data';
const DIST_DIR = './dist';
const INDEX_DIR = './data/index.json'


async function main() {
  if (!(await direxists(DIST_DIR))) {
    await mkdir(DIST_DIR);
  }

  const file = await readFile(INDEX_DIR);
  let JSONdata = JSON.parse(file);
  const results = [];

  for (const file of JSONdata) {
    const title = file.title;
    const description = file.description;
    const csv = file.csv;
    const filename = `${title}.html`;

    const result = {
      title,
      description,
      csv,
      filename
    }
    results.push(result);

    const path = join(DIST_DIR, filename);
    const template = newPageTemplate(title, result);
    await writeFile(path, template, {flag: 'w+'});


  }
  const path = join(DIST_DIR, 'index.html');
  const template = indexTemplate(results);
  await writeFile(path, template, {flag: 'w+'});
}

main().catch((err) => console.error(err));
