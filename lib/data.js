import got from 'got';

const categoryID = 1;
const baseURL = `https://dev-luisagraycs5513.pantheonsite.io/wp-json/twentytwentyone-child/v1/latest-posts/${categoryID}`;


export async function getAllIds() {
  try {
    const response = await got(`${baseURL}1`);
    const jsonObj = JSON.parse(response.body);
    return jsonObj.map(post => ({ params: { id: post.id.toString() } }));
  } catch {
    return [];
  }
}

export async function getSortedList() {
  try {
    const response = await got(`${baseURL}1`);
    const jsonObj = JSON.parse(response.body);
    jsonObj.sort((a, b) => a.title.rendered.localeCompare(b.title.rendered));
    return jsonObj.map(post => ({ id: post.id.toString(), name: post.title.rendered }));
  } catch {
    return [];
  }
}

export async function getData(idRequested) {
  try {
    const response = await got(`${baseURL}1`);
    const jsonObj = JSON.parse(response.body);
    const objMatch = jsonObj.find(post => post.id.toString() === idRequested);
    return objMatch ? objMatch : {};
  } catch {
    return {};
  }
}
