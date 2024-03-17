export async function getTags() {
  let tags;

  // const fields =
  //   "feature_image,feature_image_alt,sug,updated_at,published_at,title,excerpt,primary_author,primary_tag,reading_time";

  const tagsUrl = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/tags/?key=${process.env.GHOST_CONTENT_API_KEY}`;

  const tagsResponse = await fetch(tagsUrl).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return {
      data,
      status,
    };
  });

  // return an empty array and console log the errors if any error occured
  if (tagsResponse.status != 200) {
    console.log(tagsResponse.data.errors);
    return [];
  }
  tags = tagsResponse.data.tags;
  if (tags == undefined) tags = [];

  return tags;
}


