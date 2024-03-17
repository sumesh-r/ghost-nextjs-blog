export async function getPosts() {
  let posts;

  const fields =
    "feature_image,feature_image_alt,slug,updated_at,published_at,title,excerpt,primary_author,primary_tag,reading_time";

  const postUrl = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&include=tags,authors&order=published_at%20desc&fields=${fields}`;

  const postsResponse = await fetch(postUrl).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return {
      data,
      status,
    };
  });

  // return an empty array and console log the errors if any error occured
  if (postsResponse.status != 200) {
    console.log(postsResponse.data.errors);
    return [];
  }
  posts = postsResponse.data.posts;
  if (posts == undefined) posts = [];

  // change the format of the date
  posts.map(
    (post, idx) => (
      (post.published_at = post.published_at.split("T")[0]),
      (post.updated_at = post.updated_at.split("T")[0])
    )
  );

  return posts;
}

export async function getPostsByTag(tag) {
  let posts;

  const fields =
    "feature_image,feature_image_alt,slug,updated_at,published_at,title,excerpt,primary_author,primary_tag,reading_time";

  const postUrl = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&include=tags,authors&order=published_at%20desc&fields=${fields}&filter=tag:${tag}`;

  const postsResponse = await fetch(postUrl).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return {
      data,
      status,
    };
  });

  // return an empty array and console log the errors if any error occured
  if (postsResponse.status != 200) {
    console.log(postsResponse.data.errors);
    return [];
  }
  posts = postsResponse.data.posts;
  if (posts == undefined) posts = [];

  // change the format of the date
  posts.map(
    (post, idx) => (
      (post.published_at = post.published_at.split("T")[0]),
      (post.updated_at = post.updated_at.split("T")[0])
    )
  );

  return posts;
}

export async function getPostBySlug(slug) {
  let post;

  const postUrl = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&filter=slug:${slug}`;

  const postResponse = await fetch(postUrl).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return {
      data,
      status,
    };
  });

  // return an empty array and console log the errors if any error occured
  if (postResponse.status != 200) {
    console.log(postResponse.data.errors);
    return [];
  }
  post = postResponse.data.posts[0];

  // change the format of the date
  post.published_at = post.published_at.split("T")[0];
  post.updated_at = post.updated_at.split("T")[0];

  return post;
}
