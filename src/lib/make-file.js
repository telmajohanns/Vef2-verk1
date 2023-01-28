import {readFile as fsReadFile} from 'fs/promises';



export async function readFile(file, {encoding = 'iso88591'} = {}) {
  try {
    const content = await fsReadFile(file);
    return content.toString(encoding);
  }
  catch (e) {
    return null;
  }
}
