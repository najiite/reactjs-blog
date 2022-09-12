import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "mix9aosi", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2021-10-21',
  useCdn: true, // `false` if you want to ensure fresh data
});